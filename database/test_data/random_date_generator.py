from datetime import date, timedelta
import random

def date_generation(range1, range2):
    res_date = [range1]
    while range1 != range2:
        range1 += timedelta(days=1)
        res_date.append(range1)
    res = random.choice(res_date)
    return str(res)