# x = ([int(i.rstrip()) for i in open('input3.txt')])
# list(x)

x = open('input3.txt').read()
x = x.split('\n')
# x= '00100 11110 10110 10111 10101 01111 00111 11100 10000 11001 00010 01010 '
# x = x.split(' ')
#1
# transpose = []
# print(len(x), len(x[0]))
# for i in range(0 , len(x[0])):
#     temp = []
#     for j in range ( 0, len(x)-1):
#         temp.append(x[j][i])
    
#     transpose.append(temp)
# print(transpose)
# res = ''
# for i in range(len(transpose)):
#     countOnes =0
#     countZer0= 0
#     for j in range(0, len(transpose[i])):
#         if(transpose[i][j] == '0'):
#             countZer0 +=1
#         else:
#             countOnes +=1
#     print(countOnes , countZer0)
#     if(countOnes > countZer0):
#         res = res + '1'
#     else:
#         res = res + '0'

# print(res)
# gamma = int(''.join('1' if i == '0' else '0' for i in res),2)
# epsilon = int(res, 2)

# print (gamma * epsilon)

#2
transpose = []
# print(len(x), len(x[0]))
for i in range(0 , len(x[0])):
    temp = []
    for j in range ( 0, len(x)-1):
        temp.append(x[j][i])
    
    transpose.append(temp)
# print(transpose)
res = ''
indexFilter = range(len(transpose[i]))
for i in range(len(transpose)):
    indexFilterZero = []
    indexFilterOnes = []

    countOnes =0
    countZer0= 0
    for j in range(0, len(transpose[i])):
        if( j in indexFilter):
            if(transpose[i][j] == '0'):
                countZer0 +=1
                indexFilterZero.append(j)
            else:
                countOnes +=1
                indexFilterOnes.append(j)
    # print(countOnes , countZer0)
    if(countOnes >= countZer0):
        indexFilter = indexFilterOnes
        res = res + '1'
    else:
        indexFilter = indexFilterZero
        res = res + '0'

print(int(res,2))
oxygen_generator = int(res,2)
res = ''
indexFilter = range(len(transpose[i]))
for i in range(len(transpose)):
    indexFilterZero = []
    indexFilterOnes = []

    countOnes =0
    countZer0= 0
    for j in range(0, len(transpose[i])):

        if( j in indexFilter):
            if(transpose[i][j] == '0'):
                countZer0 +=1
                indexFilterZero.append(j)
            else:
                countOnes +=1
                indexFilterOnes.append(j)
    # print(countOnes , countZer0)

    if(len(indexFilter) == 1):
        res = res + transpose[i][indexFilter[0]]
        continue
    if(countZer0 <= countOnes):
        indexFilter = indexFilterZero
        res = res + '0'
    else:
        indexFilter = indexFilterOnes
        res = res + '1'

print(res)
print(int(res,2))
CO2_scrubber = int(res,2)

print (oxygen_generator * CO2_scrubber)