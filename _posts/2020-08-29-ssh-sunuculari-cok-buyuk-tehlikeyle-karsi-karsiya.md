---
title: "SSH sunucuları çok büyük bir tehlikeyle karşı karşıya: FritzFrog!"
date: 2020-08-29T15:00:00
categories:
  - Yazılım
header:
  teaser: https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1491&q=80
---
![SSH sunucuları çok büyük bir tehlikeyle karşı karşıya: FritzFrog!](https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1491&q=80)

Yeni P2P (Peer-to-peer) botnet FritzFrog, tüm dünyadaki SSH sunucularına bulaşıyor
-
Araştırmacılar, dünya çapında milyonlarca sunucuyu hedeflemek için alışılmadık derecede gelişmiş önlemler kullanan, daha önce keşfedilmemiş bir botnet buldular.

Güvenlik firması Guardicore Labs araştırmacılarının bildirdiğine göre botnet, sunuculara bulaşmak ve bunları eşler arası bir ağa bağlamak için sıfırdan yazılmış özel yazılım kullanıyor.

P2P (Peer-to-peer) Botnet nedir?
-
P2P botnet'ler, komut göndermek ve içeriden verileri almak için bir ana kontrol sunucusu kullanmak yerine, yönetimlerini birçok virüslü düğüm (hacklenen bilgisayarlar) arasında dağıtır. Merkezi bir sunucu olmadığı için botnet'lerin fark edilmesi genellikle daha zordur ve kapatılması daha zordur.

Guardicore Labs araştırmacısı Ophir Harpaz, "Bu kampanyayla ilgili ilginç olan şey, ilk bakışta, bağlı görünen hiçbir komut ve kontrol (CNC) sunucusunun olmamasıydı" "Araştırmanın başlamasından kısa bir süre sonra CNC'nin olmadığını anladık."

Guardicore Labs araştırmacılarının FritzFrog adını verdiği botnet, aşağıdakiler de dahil olmak üzere birçok gelişmiş özelliğe sahiptir:

- Virüs bulaşmış sunucuların disklerine asla dokunmayan payload yükler. Yani kendini belli etmemeye çalışır.
- Ocak ayından bu yana yazılımın en az 20 sürümü çıkarılmıştır.
- Yalnızca ağ yöneticilerinin makineleri yönetmek için kullandıkları SSH sunucularına bulaşmaya odaklanır.
- Virüs bulaşmış sunuculara arka kapı açma yeteneği vardır.

Hızla gelişen sürümler, virüsten koruma ve diğer uç nokta korumasının kötü amaçlı yazılımı algılamasını zorlaştırıyor.

Eşler arası tasarım, yani peer-to-peer, araştırmacıların veya kolluk kuvvetlerinin operasyonu kapatmasını zorlaştırır. Bir botnet'i kapatmanın normal yolu, komuta ve kontrol sunucusunun kontrolünü ele geçirmektir. Ancak Peer-to-peer, saldırganlar hakkında ipuçları verilmemesi için kontrol sunucuları ve etki alanlarını incelemeyi de imkansız kılıyor.

Harpaz, şirket araştırmacılarının botnet'i ilk olarak Ocak ayında görüldüğünü söyledi. O zamandan beri devlet kurumlarına, bankalara, telekom şirketlerine ve üniversitelere ait on milyonlarca IP adresi hedefleniyor.
Botnet şu ana kadar "ABD ve Avrupa'da tanınmış üniversitelere ve demiryolu şirketlerine" ait 500 sunucuya bulaşmayı başardı.

Botnet'e sızmak ve analiz etmek için araştırmacılar, botnet'in komut göndermek ve veri almak için kullandığı şifreleme anahtarlarını değiştiren bir program geliştirdiler.

Harpaz, "Frogger adını verdiğimiz bu program, ağın doğasını ve kapsamını araştırmamızı sağladı". "Frogger ile, kendi düğümlerimizi enjekte ederek devam eden P2P ağına katılmayı başardık."

SSH sunucularını hem güçlü bir parola hem de bir şifreleme sertifikası ile korumayan yöneticilere, eğitimsiz bir gözün tespit etmesi zor olan bu kötü amaçlı yazılımlarla zaten bulaşmış olabilir.
