import psycopg2

class History:
   conn = None

   def __init__(self):
      self.conn = None

   def open(self):
      self.conn = psycopg2.connect("dbname=pnr user=pnr")

   def close(self):
      self.conn.close()

   def save(self, data):
      cur = self.conn.cursor()
      cur.execute("insert into history(data) values(%s) returning id", (data,))
      record_id = cur.fetchone()[0]
      self.conn.commit()
      cur.close()

      return record_id

if __name__ == '__main__':
   history = History()
   history.open()
   record_id = history.save('{ "abc": "abc" }')
   print record_id
   history.close()
