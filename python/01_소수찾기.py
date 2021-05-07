# import time

# def is_prime(n):
#     m = int(n ** 0.5)
#     for i in range(2, m+1):
#         if n % i == 0:
#             return False
#     return True


# start = time.time()
# temp = []
# for i in range(2, 100000001):
#     if is_prime(i):
#         temp.append(i)
# end = time.time()

# print(len(temp))
# print(end - start, '초 걸렸음')



import time

def prime_list(n):
    # 에라토스테네스의 체 초기화: n개 요소에 True 설정(소수로 간주)
    sieve = [True] * n

    # n의 최대 약수가 sqrt(n) 이하이므로 i=sqrt(n)까지 검사
    m = int(n ** 0.5)
    for i in range(2, m + 1):
        if sieve[i] == True:           # i가 소수인 경우
            for j in range(i+i, n, i): # i이후 i의 배수들을 False 판정
                sieve[j] = False

    # 소수 목록 산출
    return [i for i in range(2, n) if sieve[i] == True]


start = time.time()
temp = prime_list(100000000)

print(time.time() - start)
print(len(temp))