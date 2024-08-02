choice=int(input('1-conver from fahrenheit to celsius\n2-convert from celsuis to fahrenheit \nenter your choice (1/2):'))
if choice ==1:
    f = float(input('enter the temperature in fahrenheit'))
    c = (f-32)*5/9
    print('temperature in celsius',round(c))
elif choice ==2:
    c = float(input('enter the temperature in celsius'))
    f = (c*9)/5+32
    print('temperature in fahrenheit',round(f))

else:
    print('please choose the correct option')    
