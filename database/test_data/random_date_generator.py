from datetime import date, timedelta
from random import choices
from time import strftime
import random

def date_generation(range1, range2):
    res_date = [range1]
    while range1 != range2:
        range1 += timedelta(days=1)
        res_date.append(range1)
    res = random.choice(res_date)

    # print('random data is: ' + str(res))
    # print('------------------')
    return str(res)