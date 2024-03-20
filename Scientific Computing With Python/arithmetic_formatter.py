def arithmetic_arranger(problems, show_answers=False):
    if len(problems) > 5:
        return 'Error: Too many problems.'
    line_one = ''
    line_two = ''
    line_three = ''
    line_four = ''
    for problem in problems:
        operand_one = problem.split(' ')[0]
        operator = problem.split(' ')[1]
        operand_two = problem.split(' ')[2]
        if operator not in ['+','-']:
            return "Error: Operator must be '+' or '-'."
        elif not (operand_one.isdigit() and operand_two.isdigit()):
            return 'Error: Numbers must only contain digits.'
        elif len(operand_one) > 4 or len(operand_two) > 4:
            return 'Error: Numbers cannot be more than four digits.'
        longest_width = max(len(operand_one),len(operand_two)) + 2
        line_one += operand_one.rjust(longest_width) + "    "
        line_two += operator + operand_two.rjust(longest_width - 1) + "    "
        line_three += "-" * longest_width + "    "
        if operator == '+':
            line_four += str((int(operand_one) + int(operand_two))).rjust(longest_width) + "    "
        else:
            line_four += str((int(operand_one) - int(operand_two))).rjust(longest_width) + "    "
    if show_answers:
        return line_one.rstrip() + '\n' + line_two.rstrip() + '\n' + line_three.rstrip() + '\n' + line_four.rstrip()
    else:
        return line_one.rstrip() + '\n' + line_two.rstrip() + '\n' + line_three.rstrip()
    

print(f'\n{arithmetic_arranger(["3801 - 2", "123 + 49"], True)}')