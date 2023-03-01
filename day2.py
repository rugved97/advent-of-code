x = open('input2.txt').read()
x = x.split('\n')
# print(x.read())

horizontal = 0 
depth = 0
aim = 0
for i in range(0 , len(x)-1) :
    input = x[i].split(' ')
    direction = input[0]
    amplitude = int(input[1])

    if(direction == 'forward'):
        horizontal = horizontal + amplitude
        depth = depth + aim * amplitude
    if(direction == 'down'):
        aim = aim + amplitude
    if( direction == 'up'):
        aim = aim - amplitude

print(horizontal*depth)