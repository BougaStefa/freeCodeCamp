import copy
import random


class Hat:
    def __init__(self, **balls):
        self.contents = []
        for color, count in balls.items():
            self.contents += [color] * count

    def draw(self,number):
        if number > len(self.contents):
            return self.contents
        drawn_balls = []
        for _ in range(number):
            rand_index = random.randrange(len(self.contents))
            drawn_balls.append(self.contents.pop(rand_index))
        return drawn_balls

def experiment(hat, expected_balls, num_balls_drawn, num_experiments):
    expected_list = [color for color,count in expected_balls.items() for _ in range(count)]
    success_count = 0
    for _ in range(num_experiments):
        expected_list_copy = copy.deepcopy(expected_list)
        hat_copy = copy.deepcopy(hat)
        drawn_balls = hat_copy.draw(num_balls_drawn)
        for ball in drawn_balls:
            if ball in expected_list_copy:
                expected_list_copy.remove(ball)
        if not expected_list_copy:
            success_count += 1
    return success_count / num_experiments