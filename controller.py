import sys, json
lines = sys.stdin.readlines()
args = json.loads(lines[0].rstrip())
#print args['function']
print args['args']['speed'] * 10
#print args['args']['direction']
