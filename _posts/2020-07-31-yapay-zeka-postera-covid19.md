---
title: "Yapay zeka PostEra, bu yıl içinde COVID-19 ilacı yapmak için hazırlanıyor!"
date: 2020-07-31T14:38:00
categories:
  - Yazılım
header:
  teaser: https://miro.medium.com/max/700/0*eKSjs6Nb5F36bO8W.png
---
![PostEra adı verilen bir girişim, “bu yıl içinde” COVID-19 tedavisi geliştirme niyetini açıkladı](https://miro.medium.com/max/700/0*eKSjs6Nb5F36bO8W.png)

Son zamanlarda, PostEra adı verilen bir girişim, “bu yıl içinde” COVID-19 tedavisi geliştirme niyetini açıkladı.

Doğal olarak, duyuru biraz heyecan oluşturmuş olabilir. PostEra kesinlikle bu konuda ilk biyoteknoloji / yapay zeka girişimi olmasa da, PostEra'da özellikle heyecan verici bir şey var. PostEra’nın duyurusu farklıydı:
- Zorluğa yeni bir makine öğrenme çözümü sundu.

Lansman ilanlarını okuyunca, bu olayın sadece mühendislikle alakası olduğu zannediliyor, ancak yapay zeka bu olayın başka kısmında.

PostEra, makine öğreniminde bir atılım beklemiyor, spekülatif teknolojiye bahse girmiyor. Yeni bir alanda benzer bir sorunu çözmek için popüler bir ürün olan Google Çeviri tarafından kullanılan kanıtlanmış bir yaklaşımı genelleştiriyorlar.

Ne demek istediğimi daha iyi açıklamak için, PostEra'nın nasıl çalıştığını inceleyelim.

Kimyasal sentezi Google Çeviri olarak anlamak
-
PostEra'nın ilaç geliştirmede çözdüğü sorun farklı:

Herhangi bir bileşik için, onu üretmenin birçok farklı yolu var ve hangi yolun en iyi olduğunu belirlemek için katı, deterministik bir model yok.

Biraz daha anlamak için, bir molekülü basitçe bir beyaz tahtaya çizerek tasarlayabilirsiniz:

![Kimyasal sentez](https://miro.medium.com/max/700/0*eKSjs6Nb5F36bO8W.png)

Oksijen atomları buraya gelir, birkaç bağ molekülü ekler. Sonuç olarak molekül oluşur. Ancak gerçek hayatta, atomları bu kadar kesin bir şekilde kesip yapıştıramayız.

Yeni bir molekül yaratmak için kimyagerler daha basit moleküller alırlar ve bunları “hareketler” olarak adlandırılan kimyasal reaksiyonlarla dönüştürürler. Yeni moleküller daha sonra ilave hareketlerle dönüştürülür, sonunda hedef molekül üretilir. Bir moleküle götüren bir dizi harekete “rota” denir.

Kimyacılar hamlelerin sonuçlarını ve rotaların yaşayabilirliğini çoğunlukla eğitimli deneme yanılma yoluyla tahmin ediyorlar. Çünkü kimya pahalı.

PostEra'nın yaptığı, önerilen bir molekül göz önüne alındığında, sentez için en uygun yollar göz önüne alındığında, makine öğrenmesini kullanan bir platform oluşturmaktır:

![PostEra internet sitesi](https://miro.medium.com/max/600/0*eeVLy4qDjlQefLeB.gif) **Kaynak: PostEra**

Nasıl çalışır derseniz, kimyasal sentez problemini daha soyut terimlere bölmeye yardımcı olur:
- Bir dizi A nesnesini tek bir B nesnesine dönüştürmeniz gerekir.
- Nesneleri önceden tanımlanmış bir dizi işlevle (kimyasal / fiziksel reaksiyonlar) birleştirerek dönüştürebilirsiniz.
- Teorik olarak akla yatkın birçok fonksiyon zincirinin yaşayabilirliğini puanlamak için bir model oluşturmanız gerekir.

Kimya bağlamını bu problemden çıkarırsanız, bu mühendislere tanıdık gelen bir çeviri haline gelir.
Google Çeviri tasarımı yapmakla görevlendirildiğinizi düşünün. Sorunu şu şekilde ele alabilirsiniz:
- A nesnesini, bu durumda Fransızca “Huile de noix de coco,” kelimesini eşdeğer bir İngilizce ifade olan tek bir nesneye - B'ye dönüştürmeniz gerekir.
- Çeviri işlevlerini farklı şekillerde uygulayarak nesnelerinizi dönüştürebilirsiniz. "Huile de noix de coco", "hindistancevizi yağı" veya "kakao fıstığı yağı" olabilir.
- Açık bir kural tabanlı sistem olmadan çeşitli çevirileri puanlamalısınız. “Hindistan cevizi yağı” doğrudur, ancak “kakaolu fındık yağı” da yanlış değil.

![Google Translate](https://miro.medium.com/max/570/1*aT8ZQRECCamlOtfJIRjQ0w.png) **Kaynak: Google Translate**

Temel olarak, aynı sorun ve Google Çeviri'de kullanılan aynı sekanstan sekansa yaklaşım PostEra için işe yarayacak.

Düzgün bir şekilde eğitilmiş olan PostEra’nın modelleri, moleküller arasında olası bir “çeviriler” ağacı oluşturabilmeli, ağaçtaki her rotaya bir geçerlik puanı atamalı ve sonra ağacı en uygun çeviriler için arayabilmeli - ve tam olarak budur.

PostEra bir mucize üzerinde değil, çığır açacak bir şey üzerinde çalışıyor
-
PostEra’nın çığır açacak bir şey ile ilgili iddialı olan tek şeyin zaman çizelgesi olduğunu vurgulamak önemlidir.

Temel teknoloji zaten kanıtlandı. Makine çevirisi uzun zamandır bir alan olarak kuruldu ve PostEra’nın kurucu ekibi, şirkete başlamadan önce kimyasal reaksiyonların sonuçlarını tahmin etmede insan kimyacılarından daha iyi performans gösteren ilk modeli yayınladı.

Bu ML çığırını bu kadar heyecan verici yapan şeyin bir parçası. Temeldeki ürün spekülatif değil - işlevsel bir yazılım ve makine öğrenimi mühendisliğinin teknolojiyi gerçek, somut yollarla nasıl değiştirdiğinin bir başka örneği olarak hizmet eder.
