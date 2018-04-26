## compute_input.py

import sys, json, datetime, numpy as np
import logger

#Read data from stdin
def read_in():
    lines = sys.stdin.readlines()
    #Since our input would only be having one line, parse our JSON data from that
    return json.loads(lines[0])

def getTimestamp():
    return 'Timestamp: ' + str(datetime.datetime.now().time()) + '\n'

def main():
    # write a file to demonstrate that the script ran
    logger.instantiateLogFile()
    # file = open("./pythonBackend/pythonOutput.txt","w+")
    # file.write('PYTHON LOGFILE from compute_input\n')

    

    #get our data as an array from read_in()
    lines = read_in()

    writeString = 'Received input: ' + str(lines)
    logger.writeToLogFile(writeString)

    # file.write(getTimestamp())
    # file.write('received input: ')
    # linesAsString = str(lines)
    # file.write(linesAsString)
    # file.write('\n')
    # file.close()

    #create a numpy array
    np_lines = np.array(lines)

    #use numpys sum method to find sum of all elements in the array
    lines_sum = np.sum(np_lines)

    #return the sum to the output stream
    print('something else coming back from python')
    print('echo: ', lines)
    #print(lines_sum)

#start process
if __name__ == '__main__':
    main()