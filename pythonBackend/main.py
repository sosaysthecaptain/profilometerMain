## compute_input.py

import sys, json, datetime, numpy as np
import logger

#Read data from stdin
def read_in():
    lines = sys.stdin.readlines()
    #Since our input would only be having one line, parse our JSON data from that
    return json.loads(lines[0])


def main():
    # instantiate log
    logger.instantiateLogFile()

    #get our data as an array from read_in()
    lines = read_in()

    # on read, write to log
    writeString = 'Received input: ' + str(lines)
    logger.writeToLogFile(writeString)

    # parser functionality goes here

    # this is how we return
    print('echo: ', lines)
    #print(lines_sum)

# start process
if __name__ == '__main__':
    main()
