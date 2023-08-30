'''
outfielder.py

v1 = 0.99m/s
v2 = 9.99m/s

10x - 5x^2

pip install matploit

'''
# %%
import matplotlib.pyplot as plt

def ball_trajectory(x):
    location = 10 * x - 5 * (x**2)
    return location

xs = [x/100 for x in list(range(201))]
ys = [ball_trajectory(x) for x in xs]
plt.plot(xs, ys)
plt.title('The trajectory of a thrown ball')
plt.xlabel('Horizontal')
plt.ylabel('Vertical')
plt.show()

# %%