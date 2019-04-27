import numpy as np
import matplotlib.pyplot as plt

#decide height and width
file = open('3_0001_0.asc', 'r')
data = file.readlines()
height = len(data)
width = len(data[0].split(' '))-1 #removing end '\n'
print(width, height)

values = np.full((height, width), 0, dtype=int)
print(values.shape)

#read data into numpy array
for i in range(height):
    line = data[i].split(' ')
    line.pop()
    values[i] = list(map(int, line))

#find max min value
max = np.max(values)
min = np.min(values)
print(min, max)

#re-scale value into rgb value
rgb = np.interp(values.T, [min, max], [0, 255]).astype(int)

plt.gray()
plt.imshow(rgb)

plt.imsave("gpr.png", rgb)

# i=0
# data = [([0]*1000) for j in range(2000)]
# while True:
#     line = file.readline()
#     if line != '':
#         strings = line.split(' ')
#         strings.pop()   #remove last '\n'
#         data[i] = [int(j) for j in strings]
#         #print(data[i])
#         i = i+1
#     else:
#         break

# width = len(data[0])
# height = i


