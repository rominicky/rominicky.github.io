## Explorando corpus con R: las palabras en acción

### Del archivo histórico al análisis textual estadístico

##### [Romina De León](romideleon@gmail.com)

<div style="display: flex; justify-content: center; align-items: center; gap: 40px; margin-top: 20px;">
  <img src="images/logo_hdlab_iibicrit.png" style="width: 26%;">
</div>

---

## 1. El análisis textual estadístico

- **Close Reading** Lectura intensiva / Hermenéutica tradicional
- **Distant Reading** Lectura distante / Estadística textual
- **Del documento al dato estructurado**

<div class="gallery">
<div style="display: flex; justify-content: center; gap: 30px; font-size: 0.9rem; margin-top: 2px;">
  <div style="display: flex; flex-direction: column; align-items: center; width: 25%; text-align: center;">
    <img src="images/borges.jpg" style="width: 55%;">
    <em>Hoja escrita por Jorge Luis Borges en una edición del libro The Kabbalah de Christian Ginsburg.<br> Biblioteca Nacional Mariano Moreno.</em>
  </div>
  <div style="display: flex; flex-direction: column; align-items: center; width: 25%; text-align: center;">
  <a href="https://hdlab.space/Relacion-de-las-cosas-sucedidas/#pop-up" data-lightbox="docs">
    <img src="images/distante.png" style="width: 55%;">
    <em>Edición digital de Relación de las cosas sucedidas. <br>Pero Hernández, 1545.</em></a>
  </div>
</div>
</div>

---

## 2. Aplicación en la investigación histórica y humanística

- ¿Para qué cuantificar el lenguaje del corpus?
  - Énfasis y fijaciones léxicas: Identificación de conceptos persistentes en el discurso.
  - Categorización y alteridad: Rastreo de fórmulas discursivas particulares
  - Series textuales: Variación del vocabulario a lo largo del tiempo o entre diferentes autores/cronistas
  - Reproducibilidad: Procesos transparentes y auditables mediante código.

<div style="display: flex; justify-content: center; align-items: center; margin-top: 20px;">
  <img src="images/diagrama-flujo.svg" style="width: 76%;">
</div>

---

## 3. Introducción a las regularidades estadísticas

**El lenguaje no es aleatorio, sino que se rige por distribuciones de probabilidad y regularidades matemáticas**

- Frecuencias absolutas vs. relativas
- Ley de Zipf (Rango vs. Frecuencia)
- Ley de Heaps (Crecimiento del vocabulario)

<div style="display: flex; justify-content: center; align-items: center; margin-top: 20px;">
<img src="images/frecuencias.svg" style="width: 76%;"><e>Comparativas de métricas</e>
</div>

<div style="display: flex; justify-content: center; align-items: center; margin-top: 20px;">
  <a href="https://thumb.wikimedia.org/wikipedia/commons/thumb/a/ac/Zipf_30wiki_en_labels.png/1280px-Zipf_30wiki_en_labels.png" data-lightbox="docs"><img src="https://thumb.wikimedia.org/wikipedia/commons/thumb/a/ac/Zipf_30wiki_en_labels.png/1280px-Zipf_30wiki_en_labels.png" style="width: 76%;"><em>Verificación de la Ley de Zipf<br>generada por Sergio Jimenez de Wikimedia.</em></a></div>

<div style="display: flex; flex-direction: column; align-items: center; width: 25%; text-align: center;">
  <a href="https://upload.wikimedia.org/wikipedia/commons/e/e2/Heaps%27_Law_on_%22War_and_Peace%22.svg" data-lightbox="docs">
    <img src="https://upload.wikimedia.org/wikipedia/commons/e/e2/Heaps%27_Law_on_%22War_and_Peace%22.svg" style="width: 55%;">
    <em>Verificación de la Ley de Heaps en la novela Guerra y paz de León Tolstói <br>generada por usuario de Wikimedia.</em></a>
  </div>

---

## 4. Ahora a trabajar
