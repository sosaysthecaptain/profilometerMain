print('python script running')

# write a file to demonstrate that the script ran
file = open("pythonOutput.txt","w+")
file.write('This is a different line')
file.close()

def testFunction():
    print('python test function running')