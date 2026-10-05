# Encomenderas, mediación y poder en el ámbito colonial andino en el siglo XVI.

## De la microhistoria a la Historia Digital.Romina De León (UBA / CONICET)

Buenas tardes a todos y todas. Es un gusto compartir este primer bloque con Paula y Valentina. Lo que vengo a presentarles hoy son los avances de mi investigación, actualmente como anteproyecto doctoral, donde exploro cómo las herramientas de las Humanidades Digitales nos permiten desentrañar la agencia y accionar femenino en el temprano Virreinato del Perú.
Mi pregunta central gira en torno a una paradoja estructural
¿Cómo ejerce autoridad y administra poder una mujer que, dentro de la sociedad hispánica, ocupa una posición de subordinación y minoridad jurídica?
Para responder esto, mi trabajo propone un puente metodológico: partir de la lectura a contrapelo caracteristica de la microhistoria, para escalar hacia el análisis relacional que nos brinda las Humanidades Digitales y la Hisotria Digital.

### Slide 2 - La Doble Barrera del Archivo

- La ilusión de la transparencia documental
  - Barrera material: La letra procesal encadenada.
  - Barrera discursiva: La subalternidad archivística y la burocracia patriarcal.

Hoy en día, la digitalización masiva de repositorios como PARES o el Archivo General de la Nación de Perú nos da una falsa sensación de inmediatez. Parece que el documento está ahí, disponible a un clic. Sin embargo, nos enfrentamos a una doble barrera. La primera es material y técnica: la insidiosa letra procesal encadenada del siglo XVI. La segunda es discursiva: el sesgo constitutivo de la burocracia imperial. La administración indiana carecía de un vocabulario para registrar la agencia femenina de manera autónoma. A esto lo entiendo como una subalternidad archivística. Las mujeres de la élite encomendera aparecen camufladas bajo relaciones de dependencia paterna o marital, en documentos que funcionaban como artefactos para legitimar el 'yo conquistador' masculino.

### Slide 3: La Paradoja: Subordinación vs. Dominio

- El sistema moderno colonial de género (Lugones)
  - Subordinación tutelada frente a la élite masculina.
  - Dominio activo y coacción sobre los pueblos subalternos.

Para desarmar este sesgo, es indispensable una distinción conceptual rigurosa. Estas mujeres estaban subordinadas al patriarcado hispánico, pero no eran subalternas en términos estructurales. Siguiendo la noción del 'sistema moderno colonial de género' de María Lugones, y el concepto de colonialismo interno de Silvia Rivera Cusicanqui, analizo a estas mujeres como partícipes activas de la dominación. Ejercían autoridad, administraban tributos y dirigían servicios personales. Su agencia no era anticolonial ni emancipatoria; era una práctica situada que buscaba afirmar sus propios privilegios linajudos reproduciendo el orden asimétrico sobre las poblaciones indígenas y las personas esclavizadas.

### Slide 4: El Corpus y la Proyección Doctoral

- Voces en los márgenes de la burocracia
  - Casos de avance: Elvira Manrique de Chaves, María Ramírez, Mariana de Ribera, María Martel.
  - Hacia la tesis: Ampliación geográfica y temporal, siglo XVI y principios del siglo XVII.
  - Fuentes: Probanzas de méritos, litigios, testamentos, epistolar.

La propuesta metodológica del anteproyecto para mi tesis doctoral extiende su análisis a fuentes del siglo XVI y principios del XVII, y se amplía geográficamente hacia el sur del Virreinato. Esto me permite estudiar los orígenes de esta dinámica, la encomienda, así como sus mutaciones, transformaciones y asincronías regionales. En este avance empírico me enfoco en los expedientes de mujeres como Elvira Manrique, María Ramírez, Mariana de Ribera y María Martel. A través de ellas observamos que utilizaron los intersticios del orden jurídico para desplegar una brillante 'triangulación legal', litigando a través de mediadores masculinos para retener sus encomiendas.

### Slide 5: El choque entre la IA y la Curaduría Histórica

- La transcripción asistida no reemplaza la hermenéutica.
  - El límite de los modelos automatizados (HTR/LLMs) ante las fuentes coloniales.
  - La necesidad del "human in the loop".

Para procesar este volumen de folios recurro a modelos de reconocimiento de texto manuscrito (HTR) como Transkribus y a la extracción de datos estructurados mediante modelos de lenguaje local. Pero aquí es donde la Historia Digital exige rigor crítico: la máquina no comprende la genealogía colonial. Por ejemplo, al procesar ciertos expedientes, una lectura automatizada o un modelo sin contexto puede leer la palabra 'mexico', cuando la curaduría paleográfica manual permite restituir que el manuscrito en realidad dice 'Mendoça', y que la figura mencionada no era un 'clérigo', sino Joan de Mendoça, el marido de Mariana de Ribera. Del mismo modo, donde la IA alucina un nombre como 'Geronimo' o 'Raul' a principio de línea, el ojo entrenado detecta que se trata de la conjunción 'y' proveniente de la página anterior, seguida del nombre 'Gaspar'. O la importancia de cruzar los datos extraídos con repositorios como PARES para confirmar, por ejemplo, que Juan Sierra de Leguizamo era efectivamente el marido de María Ramírez. La curaduría manual es irremplazable, el 'human in the loop' es irremplazable para generar capta —datos humanísticos interpretados— y no solo data.

### Slide 6: De la Lectura Cercana al Macroanálisis

- Redes de Poder y Lectura Distante. De la imagen al dato estructurado
  - Lectura distante (Distant Reading) --> Sistematizar lo invisible.
  - Pipelines: TEI-XML --> R / Python--> Visualización

Una vez que el texto está curado, pasamos de la lectura cercana —morosa y detallada— a la lectura distante. Ningún ojo humano puede retener folio a folio las redes de decenas de personajes que interactúan en estos litigios. Para esto, estructuro los datos adoptando el paradigma del minimal computing. Esto no es solo una elección técnica, es una postura política desde el Sur Global: utilizar recursos de bajo costo, código abierto, lenguajes como R y Python, y marcado en TEI-XML para no depender de infraestructuras cerradas del Norte. Transformar las fuentes manuscritas en capta (datos construidos) nos permite aplicar procesamiento de lenguaje natural y modelado de datos para ver qué patrones retóricos se repiten cuando estas mujeres defienden sus encomiendas frente a la Real Audiencia.

### Slide 7: Redes de Poder y Dominación

- Análisis de Redes Sociales (SNA)
  - Hacia arriba: Alianzas, justicia, linaje.
  - Hacia abajo: Dominio, coacción, pueblos originarios.
    [Sugerencia visual: Incluir aquí una captura de un grafo de red o plot que hayas generado en R o Python]

El resultado de este procesamiento computacional es la visualización de la agencia femenina a través del Análisis de Redes. Los grafos nos permiten mapear simultáneamente los dos vectores que atraviesan a la encomendera: su vector 'hacia arriba', conectándose con oidores, procuradores y pares de la élite para negociar su tutela; y su vector 'hacia abajo', graficando su rol activo y coactivo en la administración de las comunidades indígenas y el servicio personal. El análisis de grafos rompe el espejismo del archivo burocrático, revelando a la mujer como un nodo central e indispensable en la circulación del poder económico colonial, algo que la historiografía tradicional basada en casos aislados solo había intuido.

### Slide 8: Conclusiones

- Hackear el monopolio burocrático patriarcal
  - La mujer de élite como sujeto histórico activo.
  - La tecnología al servicio de las voces veladas.

Para concluir, la intersección entre la crítica documental tradicional y el procesamiento computacional de las Humanidades Digitales nos permite hackear el monopolio burocrático patriarcal de la temprana colonia. Al extraer, limpiar y modelar computacionalmente estos expedientes del siglo XVI, demostramos que las encomenderas no fueron una anomalía o un mero anexo demográfico. Fueron verdaderos sujetos históricos que sostuvieron la estructura virreinal, administrando el dominio sobre el mundo subalterno mientras disputaban palmo a palmo sus privilegios en los estrados judiciales. Escuchar estas voces veladas hoy requiere, paradójicamente, que les enseñemos a las máquinas a leer entre las líneas del imperio.
