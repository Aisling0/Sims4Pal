class Bird:
    def __init__(self, kind, call):
        self.kind = kind
        self.call = call
 
    def do_call(self):
        print 'a %s goes %s' % (self.kind, self.call)