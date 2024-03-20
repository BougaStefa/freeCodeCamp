def add_time(start, duration, starting_day=None):
    #Defining and mapping weekdays and indexes
    days = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday']
    day_to_index = {day: index for index, day in enumerate(days)}
    
    #Getting the numbers for our start time and our duration out of the provided strings
    starting_hour, starting_minute = map(int, start.split()[0].split(':'))
    midnight_time = start.split()[1]
    hours_to_add, minutes_to_add = map(int, duration.split(':'))

    # Convert starting hour to 24-hour format
    if midnight_time == 'PM' and starting_hour != 12:
        starting_hour += 12
    elif midnight_time == 'AM' and starting_hour == 12:
        starting_hour = 0

    #Getting our total minutes and hours
    total_minutes = starting_minute + minutes_to_add
    total_hours = starting_hour + hours_to_add + total_minutes // 60
    total_days = total_hours // 24

    #Calculating our endings and midnight status as well as the days elapsed
    ending_minute = total_minutes % 60
    ending_hour = total_hours % 24
    ending_hour_12 = ending_hour % 12
    ending_hour_12 = 12 if ending_hour_12 == 0 else ending_hour_12
    ending_day_time = 'PM' if 12 <= ending_hour < 24 else 'AM'
    days_elapsed = total_days

    #Creating the return string that's the same regardless of starting_day status
    new_time = f'{ending_hour_12}:{ending_minute:02d} {ending_day_time}'

    #Altering the string based on the starting day
    if starting_day:
        starting_day = starting_day.lower()
        ending_day_index = (day_to_index[starting_day] + days_elapsed) % 7
        ending_day = days[ending_day_index].capitalize()
        new_time += f', {ending_day}'

    #Finishing up the return string if it's needed
    if days_elapsed == 1:
        new_time += ' (next day)'
    elif days_elapsed > 1:
        new_time += f' ({days_elapsed} days later)'

    return new_time


print(add_time('8:16 PM', '466:02', 'tuesday'))