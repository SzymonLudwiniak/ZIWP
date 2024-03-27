from lpmn_client_biz import Connection, Task
from scipy import spatial

texts = ["Stolica Wielkopolski jest atrakcyjna.","Buty są im bardzo potrzebne.","Buty nie są im bardzo potrzebne.","Poznań to ładne miasto."]

model = "sbert-klej-cdsc-r"
_connection = Connection(config_file="X:\config\ZIWP\config.yml")
task = Task([model], _connection)
embeds = task.run_sent(texts)

print("Podobienstwo semantyczne zdań:")
for (i,text) in enumerate(texts):
    for j in range(i+1, len(texts)):
        sim1 = 1 - spatial.distance.cosine(embeds[i],embeds[j])
        print("'",texts[i],"' do '",texts[j],"'",sim1)