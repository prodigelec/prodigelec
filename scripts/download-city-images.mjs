import { writeFileSync, mkdirSync, existsSync } from "fs";

const cities = [
  { slug: "dreux",           photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Place_Mesirard_Dreux.jpg/960px-Place_Mesirard_Dreux.jpg" },
  { slug: "chartres",        photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Chartres_-_Vue_ville_et_cath%C3%A9trale.jpg/960px-Chartres_-_Vue_ville_et_cath%C3%A9trale.jpg" },
  { slug: "evreux",          photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Evreux_-_2016-06-15_-_IMG_1262.jpg/960px-Evreux_-_2016-06-15_-_IMG_1262.jpg" },
  { slug: "mantes-la-jolie", photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Mantes-la-Jolie_%2878%29%2C_coll%C3%A9giale_Notre-Dame%2C_vue_g%C3%A9n%C3%A9rale_depuis_le_nord_7.jpg/960px-Mantes-la-Jolie_%2878%29%2C_coll%C3%A9giale_Notre-Dame%2C_vue_g%C3%A9n%C3%A9rale_depuis_le_nord_7.jpg" },
  { slug: "rambouillet",     photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Mairie_de_Rambouillet.JPG/960px-Mairie_de_Rambouillet.JPG" },
  { slug: "plaisir",         photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Plaisir_Mairie.JPG/960px-Plaisir_Mairie.JPG" },
  { slug: "montfort-lamaury",photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Montfort-l%27Amaury_%40_Ch%C3%A2teau_de_Montfort.jpg/960px-Montfort-l%27Amaury_%40_Ch%C3%A2teau_de_Montfort.jpg" },
  { slug: "houdan",          photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Houdan_vue_g%C3%A9n%C3%A9rale_2025.jpg/960px-Houdan_vue_g%C3%A9n%C3%A9rale_2025.jpg" },
  { slug: "maintenon",       photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Mairie_de_Maintenon_le_9_septembre_2015_-_3.jpg/960px-Mairie_de_Maintenon_le_9_septembre_2015_-_3.jpg" },
  { slug: "anet",            photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Ch%C3%A2teau_Anet_wiki.jpg/960px-Ch%C3%A2teau_Anet_wiki.jpg" },
  { slug: "nogent-le-roi",   photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Nogent-le-Roi_-_Chateau_01.jpg/960px-Nogent-le-Roi_-_Chateau_01.jpg" },
  { slug: "nonancourt",      photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Nonancourt_-_%C3%A9glise_saint_Martin.jpg/960px-Nonancourt_-_%C3%A9glise_saint_Martin.jpg" },
  { slug: "ivry-la-bataille", photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Ivry-la-bataille-vu-du-chateau.jpg/960px-Ivry-la-bataille-vu-du-chateau.jpg" },
];

mkdirSync("public/cities", { recursive: true });

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

for (const city of cities) {
  try {
    const res = await fetch(city.photo, {
      headers: {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36",
        "Accept": "image/jpeg,image/png,image/*,*/*;q=0.8",
        "Accept-Language": "fr-FR,fr;q=0.9",
        "Referer": "https://commons.wikimedia.org/",
      },
    });
    if (!res.ok) { console.error(`❌ ${city.slug}: HTTP ${res.status}`); continue; }

    const contentType = res.headers.get("content-type") || "";
    const ext = contentType.includes("png") ? "png" : "jpg";
    const filename = `public/cities/${city.slug}.${ext}`;
    if (existsSync(filename)) { console.log(`⏭️  ${city.slug} déjà téléchargé`); continue; }
    const buffer = Buffer.from(await res.arrayBuffer());
    writeFileSync(filename, buffer);
    console.log(`✅ ${city.slug} (${contentType}) → ${filename}`);
  } catch (e) {
    console.error(`❌ ${city.slug}: ${e.message}`);
  }
  await sleep(5000);
}
