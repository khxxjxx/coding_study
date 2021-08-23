// our-domain.com/:meetupId

import MeetupDetail from '../components/meetups/MeetupDetail';

function MeetupDetails() {
  return (
    <MeetupDetail
      image="https://upload.wikimedia.org/wikipedia/commons/3/3b/Frauenkirche_and_Neues_Rathaus_Munich_March_2013.JPG"
      title="A First Meetup"
      address="Some Street 5, Some City"
      description="The meetup description"
    />
  );
}

export async function getStaticPaths() {
  return {
    fallback: false,
    paths: [
      {
        params: {
          meetupId: 'm1',
        },
      },
      {
        params: {
          meetupId: 'm2',
        },
      },
    ],
  };
}

export async function getStaticProps(context) {
  // fetch data for a single meetup

  const meetupId = context.params.meetupId;

  console.log(meetupId);

  return {
    props: {
      meetupDate: {
        image:
          'https://upload.wikimedia.org/wikipedia/commons/3/3b/Frauenkirche_and_Neues_Rathaus_Munich_March_2013.JPG',
        id: meetupId,
        title: 'A First Meetup',
        address: 'Some Street 5, Some City',
        description: 'The meetup description',
      },
    },
  };
}

export default MeetupDetails;
