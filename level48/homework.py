def row_da_columns(rows, cols):
    for row in range(1, rows + 1):
        for col in range(1, cols + 1):
            if row == col:  # მხოლოდ იმ ელემენტებზე მოქმედებს, როცა row და col ერთნაირია
                print(f"row: {row} col: {col}")
row_da_columns(2, 2)

def row_da_cols(rows, cols):
    for row in range(1, rows + 1):
        for col in range(1, cols + 1):
            if row != col:  # მხოლოდ იმ ელემენტებზე მოქმედებს, როცა row და col არ არიან ერთნაირები
                print(f"row: {row} col: {col}")
row_da_cols(2, 2)

def multiplication():
    table = []
    for i in range(1, 11):
        row = []
        for j in range(1, 11):
            row.append(i * j)
        table.append(row)
    return table
result = multiplication()
for row in result:
    print(row)

def print_greater_pairs(n):
    pairs = []
    for x in range(1, n + 1):
        for y in range(1, n + 1):
            if y > x:
                pairs.append((x, y))
    
    for pair in pairs:
        print(pair)
print_greater_pairs(3)