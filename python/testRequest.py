from lpmn_client_biz import Connection, Task
from scipy import spatial

texts = ["Stolica Wielkopolski jest atrakcyjna.","Buty są im bardzo potrzebne.","Buty nie są im bardzo potrzebne.","Poznań to ładne miasto."]

model = "sbert-klej-cdsc-r"
_connection = Connection(config_file="X:\config\ZIWP\config.yml")
task = Task([model], _connection)
embeds = task.run_sent(texts)

sim1 = 1 - spatial.distance.cosine(embeds[0],embeds[1])
sim2 = 1 - spatial.distance.cosine(embeds[1],embeds[2])
sim3 = 1 - spatial.distance.cosine(embeds[0],embeds[2])
print("Podobienstwo semantyczne zdań:")
print("'",texts[0],"' do '",texts[1],"'",sim1)
print("'",texts[1],"' do '",texts[2],"'",sim2)
print("'",texts[0],"' do '",texts[2],"'",sim3)