print('select an operation to perform')
print('1 ADD')
print('1 subtract')
print('3 multiply')
print('4 divide')
operation = input()
 #addition
if operation == '1':
    num1= input('enete first number')
    num2= input('enete first number') 
    print('The sum is = '+str( int(num1)+int(num2)))
elif operation == '2':
    #subtract
     num1= input('enete first number')
     num2= input('enete first number') 
     print('The sum is = '+str( int(num1)-int(num2)))
elif operation == '3':
    #multiply
      num1= input('enete first number')
      num2= input('enete first number') 
      print('The sum is = '+str( int(num1)*int(num2)))
elif operation == '4':
    #divide
     num1= input('enete first number')
     num2= input('enete first number') 
     print('The sum is ='+str( int(num1)/int(num2)))
else:
    print('invalid operation ')