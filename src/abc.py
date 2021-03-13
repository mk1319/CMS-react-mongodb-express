def nextMove(player, board):
    b = [] #append to b
    for s in board:
        b.append(list(s))

    #check up left (rows) 
    for r in range(0, board_size, 2):
        if (b[board_size - r][board_size] == "-"):
            return board_size - r, board_size
        else:
            row, col= diagUL(b, board_size - r, board_size)
            if (row!= -1):
                return row, col

    #check up left (cols)
    for c in range(0, board_size, 2):
        if (b[board_size][board_size - c] == "-"):
            return board_size, board_size - c
        else:
            row, col= diagUL(b, board_size, board_size - c)
            if (row!= -1):
                return row, col

    #check up right (rows) 
    for r in range(0, board_size, 2):
        if (b[r][board_size] == "-"):
            return r, board_size
        else:
            row, col= diagUR(b, r, board_size)
            if (row!= -1):
                return row, col

    #check up right (cols)
    for c in range(0, board_size, 2):
        if (b[0][board_size - c] == "-"):
            return 0, board_size - c
        else:
            row, col= diagUR(b, 0, board_size - c)
            if (row!= -1):
                return row, col

def diagUL(bd, r, c):
    if (r == 0 or c == 0):
        return -1, -1
    elif (bd[r - 1][c - 1] == "-"):
        return r - 1, c - 1
    else:
        return diagUL(bd, r - 1, c - 1)

def diagUR(bd, r, c):
    if (r == board_size or c == 0):
        return -1, -1
    elif (bd[r + 1][c - 1] == "-"):
        return r + 1, c - 1
    else:
        return diagUL(bd, x + 1, y - 1)


def nextMove(player,board):
    return 0,0

player = input()
board = []
for i in range(0, 29):
    board.append(input())

a,b = nextMove(player,board)
print(a,b)