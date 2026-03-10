# Ghid adăugare poze – Krema Artisan Dessert House

## 📁 Structura folderelor

```
public/
  images/
    hero.jpg              ← poza de fundal din pagina principală (Hero)
    products/
      tort-signature.jpg
      tort-ciocolata-zmeura.jpg
      tort-nunta.jpg
      tort-tiramisu.jpg
      ecler-vanilie.jpg
      tarte-fructe.jpg
      cheesecake.jpg
      cannoli.jpg
      macarons.jpg
      trufle.jpg
      petit-fours.jpg
```

## 📐 Recomandări tehnice

| Poză | Format | Dimensiune recomandată | Fundal |
|---|---|---|---|
| `hero.jpg` | JPG | min. 1920×1080px | oricare |
| Produse `products/*.jpg` | **PNG cu fundal transparent** sau JPG | 800×800px | ideal transparent sau alb |

> **Sfat important**: dacă pozele produselor sunt PNG cu fundal transparent, vor arăta **mult mai bine** pe blob-ul maro — produsul va părea că plutește direct pe formă.

## ✅ Cum adaugi o poză

1. Copiază fișierul în folderul corespunzător
2. Asigură-te că numele fișierului este **exact** cel de mai sus (litere mici, fără spații)
3. Repornești serverul (`npm run dev`) dacă imaginea nu apare

## 🔄 Fallback automat

Dacă un fișier lipsește, site-ul va folosi automat o poză demo de pe internet ca placeholder — nu se va sparge nimic.
