x = ([int(i.rstrip()) for i in open('input1.txt')])
print(x)
print(list(x))

# Day1s
count = 0
for i in range(0 , len(x)-3) : 
    if x[i] < x[i+1] :
        count = count + 1


count = 0
for i in range(0 , len(x)-3) : 
    m1 = x[i] + x[i+1] + x[i+2]
    m2 = x[i+1] + x[i+2] + x[i+3]
    if(m1 < m2) :
        count = count + 1

print(count)