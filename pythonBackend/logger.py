'''
Ancillary functions
'''

import datetime

def writeToLogFile(string):
    '''
    Given a string, writes it to pythonOutput.txt with a timestamp. Assumes file has already been created. File is opened, appended, and closed.
    '''
    print('writeToLogFile running')

    file = open("./pythonBackend/pythonOutput.txt","a")
    file.write('Timestamp: ' + str(datetime.datetime.now().time()) + '\n')
    file.write(string)
    file.write('\n\n')
    file.close()

def instantiateLogFile():
    '''
    Instantiates a new log file. Run this initially such that writeToLogFile() can then be used.
    '''
    file = open("./pythonBackend/pythonOutput.txt","w+")
    file.write('PYTHON LOGFILE\n')
    file.write('Timestamp: ' + str(datetime.datetime.now().time()) + '\n\n')
    file.close()