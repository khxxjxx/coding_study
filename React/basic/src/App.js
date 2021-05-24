import './App.css';
import React, { Component } from 'react';
import TOC from './components/TOC';
import ReadContent from './components/ReadContent';
import Subject from './components/Subject';
import Control from './components/Control';
import CreateContent from './components/CreateContent';
import UpdateContent from './components/UpdateContent';

class App extends Component {
  constructor(props) {
    super(props);
    this.max_content_id = 3;
    this.state = {
      mode: 'welcome',
      selected_content_id: 2,
      subject: { title: 'WEB', sub: 'World Wid Web!' },
      welcome: { title: 'Welcome', desc: 'Hello, React!!' },
      contents: [
        { id: 1, title: 'HTML', desc: 'HTML is for information' },
        { id: 2, title: 'CSS', desc: 'CSS is for design' },
        { id: 3, title: 'JavaScript', desc: 'JavaScript is for interactive' },
      ],
    };
  }
  getReadContent() {
    let i = 0;
    while (i < this.state.contents.length) {
      let data = this.state.contents[i];
      if (data.id === this.state.selected_content_id) {
        return data;
        break;
      }
      i = i + 1;
    }
  }
  getContent() {
    let _title,
      _desc,
      _article = null;
    if (this.state.mode === 'welcome') {
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
      _article = <ReadContent title={_title} desc={_desc} />;
    } else if (this.state.mode === 'read') {
      let _content = this.getReadContent();
      _article = <ReadContent title={_content.title} desc={_content.desc} />;
    } else if (this.state.mode === 'create') {
      _article = (
        <CreateContent
          onSubmit={function (_title, _desc) {
            this.max_content_id = this.max_content_id + 1;
            /*
            // push를 이용하면 기존의 원본데이터를 바꾸기 때문에 원본을 유지하는 concat을 이용하는것이 더 적합
            this.state.contents.push({
              id: this.max_content_id,
              title: _title,
              desc: _desc,
            });
            this.setState({ contents: this.state.contents });
            */
            let _contents = this.state.contents.concat({
              id: this.max_content_id,
              title: _title,
              desc: _desc,
            });
            /*
            // concat과 동일한 결과
            let _contents = Array.from(this.state.contents);
            _contents.push({ id: this.max_content_id, title: _title, desc: _desc })
            */
            this.setState({
              contents: _contents,
              mode: 'read',
              selected_content_id: this.max_content_id,
            });
          }.bind(this)}
        />
      );
    } else if (this.state.mode === 'update') {
      let _content = this.getReadContent();
      _article = (
        <UpdateContent
          data={_content}
          onSubmit={function (_id, _title, _desc) {
            let _contents = Array.from(this.state.contents);
            let i = 0;
            while (i < _contents.length) {
              if (_contents[i].id === _id) {
                _contents[i] = { id: _id, title: _title, desc: _desc };
                break;
              }
              i++;
            }
            this.setState({ contents: _contents, mode: 'read' });
          }.bind(this)}
        />
      );
    }
    return _article;
  }
  render() {
    return (
      <div className="App">
        <Subject
          title={this.state.subject.title}
          sub={this.state.subject.sub}
          onChangePage={function () {
            this.setState({ mode: 'welcome' });
          }.bind(this)}
        />
        <div class="grid">
          <div class="ul">
            <Control
              onChangeMode={function (_mode) {
                if (_mode === 'delete') {
                  if (window.confirm('삭제하시겠습니까?')) {
                    let _contents = Array.from(this.state.contents);
                    let i = 0;
                    while (i < this.state.contents.length) {
                      if (_contents[i].id === this.state.selected_content_id) {
                        _contents.splice(i, 1);
                        break;
                      }
                      i++;
                    }
                    this.setState({ mode: 'welcome', contents: _contents });
                    alert('삭제되었습니다.');
                  }
                } else {
                  this.setState({
                    mode: _mode,
                  });
                }
              }.bind(this)}
            />
            <TOC
              onChangePage={function (id) {
                this.setState({ mode: 'read', selected_content_id: +id });
              }.bind(this)}
              data={this.state.contents}
            />
          </div>
          {this.getContent()}
        </div>
      </div>
    );
  }
}

export default App;
