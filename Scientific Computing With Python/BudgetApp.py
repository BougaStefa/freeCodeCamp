class Category:
    def __init__(self, category):
        self.category = category
        self.ledger = []

    def check_funds(self,amount):
        return True if sum(entry['amount'] for entry in self.ledger) - amount >= 0 else False
    
    def deposit(self, amount, description = ''):
        self.ledger.append({'amount': amount, 'description': description})

    def withdraw(self, amount, description = ''):
        if self.check_funds(amount):
            self.ledger.append({'amount': -amount, 'description': description})
            return True
        else:
            return False
        
    def get_balance(self):
        return sum(entry['amount'] for entry in self.ledger)
    
    def transfer(self, amount, category):
        if self.check_funds(amount):
            self.withdraw(amount, f'Transfer to {category.category}')
            category.deposit(amount, f'Transfer from {self.category}')
            return True
        else:
            return False  
    
    def __str__(self):
        first_line = self.category.center(30, '*') + '\n'
        middle_lines = ''
        last_line = f"Total: {sum(entry['amount'] for entry in self.ledger)}"
        for entry in self.ledger:
            string_amount = "{:7.2f}".format(entry['amount'])
            description_length = len(entry['description']) if len(entry['description']) < 23 else 23
            middle_lines += f"{entry['description'][:23]}{' ' * (30 - description_length - len(string_amount))}{string_amount}\n"
        return first_line + middle_lines + last_line

def create_spend_chart(categories):
    chart = 'Percentage spent by category\n'
    percentages = ['  0| ',' 10| ',' 20| ',' 30| ',' 40| ',' 50| ',' 60| ',' 70| ',' 80| ',' 90| ','100| ']
    middle_lines = ''
    dotted_lines = ' ' * 4 + '---' * len(categories) + '-'
    longest_category = len(max(categories, key=lambda category: len(category.category)).category)

    #Handling the columns section
    category_columns = ''
    for i in range(longest_category):
        category_columns += ' ' * 5
        for category in categories:
            if i < len(category.category):
                category_columns += category.category[i] + ' ' * 2
            else:
                category_columns += ' ' * 3      
        if i < longest_category - 1: 
            category_columns += '\n'

    #Calculating total expenses
    expenses_per_category = []
    for category in categories:
        total_expenses = 0
        for entry in category.ledger:
            if entry['amount'] < 0:
                total_expenses += abs(entry['amount'])
        expenses_per_category.append(total_expenses)
    

    #Handling the percentages
    overall_expenses = sum(expense for expense in expenses_per_category)
    for index,entry in enumerate(expenses_per_category):
        percentage_spent = ((entry / overall_expenses) * 100) // 10 * 10
        for i,percent in enumerate(percentages):
            if i * 10 <= percentage_spent:
                percentages[i] = percent + 'o  '
            else:
                percentages[i] = percent + '   '



    for percent in reversed(percentages):
        middle_lines += percent + '\n'

    chart += middle_lines + dotted_lines + '\n' + category_columns

    return chart

food = Category('Food')
business = Category('Business')
entertainment = Category('Entertainment')
food.deposit(900, "deposit")
entertainment.deposit(900, "deposit")
business.deposit(900, "deposit")
food.withdraw(105.55)
entertainment.withdraw(33.40)
business.withdraw(10.99)
actual = create_spend_chart([business, food, entertainment])
print(actual)