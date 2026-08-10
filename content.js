// Single source of truth for the portfolio. Plain classic script (no ES modules)
// so the site also works when opened directly from disk with file://.
// Every visible string is {en, de}. Missing German falls back to English,
// so a half-translated site degrades gracefully instead of showing keys.

const A = "./assets/";

function t(v, lang) {
  if (v == null) return "";
  if (typeof v === "string") return v;
  return v[lang] || v.en || "";
}

function tList(v, lang) {
  if (!v) return [];
  if (Array.isArray(v)) return v;
  const out = v[lang];
  return out && out.length ? out : (v.en || []);
}

const content = {
  profile: {
    name: "Vedant Chavan",
    photo: A + "portrait-framed.jpg",
    role: {
      en: "3D reconstruction · computer vision · perception",
      de: "3D-Rekonstruktion · Computer Vision · Perception"
    },
    headline: {
      en: "I build 3D perception systems.",
      de: "Ich entwickle 3D-Wahrnehmungssysteme."
    },
    positioning: {
      en: "Right now that means video-to-3D reconstruction at PALPRINT: a handheld video in, a printable and metric-scaled model out in under two minutes.",
      de: "Derzeit heißt das Video-zu-3D-Rekonstruktion bei PALPRINT: ein Handyvideo hinein, ein druckbares, metrisch skaliertes Modell in unter zwei Minuten hinaus."
    },
    location: { en: "Lippstadt, Germany", de: "Lippstadt, Deutschland" },
    available: { en: "Software Engineer at PALPRINT GmbH", de: "Software Engineer bei PALPRINT GmbH" },
    email: "vedantchavan097@gmail.com",
    linkedin: "https://www.linkedin.com/in/vedant-chavan-97ml/",
    github: "https://github.com/vedantchavan004/",
    cv: [],
    focus: [
      { en: "Stereo depth", de: "Stereo-Tiefe" },
      { en: "3D reconstruction", de: "3D-Rekonstruktion" },
      { en: "Synthetic data", de: "Synthetische Daten" },
      { en: "6D pose", de: "6D-Pose" },
      { en: "Edge deployment", de: "Edge-Deployment" }
    ],
    proof: [
      { value: "15", label: { en: "projects shipped — packaging, automotive, robotics, medical imaging", de: "Projekte umgesetzt — Verpackung, Automotive, Robotik, medizinische Bildgebung" } },
      { value: "< 2 min", label: { en: "handheld video to a printable 3D model", de: "Handyvideo zum druckbaren 3D-Modell" } },
      { value: "70 ms", label: { en: "stereo depth per frame on an embedded GPU", de: "Stereo-Tiefe pro Bild auf einer Embedded-GPU" } },
      { value: "98%", label: { en: "grasp success on a production cobot", de: "Greiferfolg an einem Produktions-Cobot" } }
    ]
  },

  nav: [
    { id: "about", label: { en: "About me", de: "Über mich" } },
    { id: "work", label: { en: "Work", de: "Arbeiten" } },
    { id: "experience", label: { en: "Experience", de: "Erfahrung" } },
    { id: "skills", label: { en: "Skills", de: "Fähigkeiten" } },
    { id: "contact", label: { en: "Contact", de: "Kontakt" } }
  ],

  sections: {
    work: { kicker: { en: "Selected work", de: "Ausgewählte Arbeiten" }, title: { en: "Three that matter", de: "Drei, die zählen" } },
    more: { kicker: { en: "Everything else", de: "Alles Weitere" }, title: { en: "More projects", de: "Weitere Projekte" } },
    experience: { kicker: { en: "Where I've worked", de: "Wo ich gearbeitet habe" }, title: { en: "Experience", de: "Erfahrung" } },
    skills: { kicker: { en: "What I work with", de: "Womit ich arbeite" }, title: { en: "Skills", de: "Fähigkeiten" } },
    about: { kicker: { en: "Get to know more", de: "Mehr über mich" }, title: { en: "About me", de: "Über mich" } },
    contact: { kicker: { en: "Get in touch", de: "Kontakt aufnehmen" }, title: { en: "Say hello", de: "Sag hallo" } }
  },

  about: {
    body: {
      en: "I came to computer vision from the factory floor. Before deep learning, I spent the start of my career in industrial automation in Pune — developing PLC logic and SCADA systems that kept production lines running. That's where I learned to build software that has to hold up in the real world, not just on a benchmark.\n\nSince moving into machine learning, I've worked across a wide range of computer-vision problems: 6D-pose estimation for robotic bin picking, image segmentation for microscopy and industrial inspection, deep learning for biomedical signals, and stereo depth estimation for automotive. More recently my focus has shifted to 3D reconstruction — building printable models, accurate to real-world scale, from nothing but a handheld video.\n\nAcross all of it, what I enjoy most is turning research into something that works: building the datasets, training the models, and getting them fast and small enough to run on real hardware.",
      de: "Zur Computer Vision bin ich über die Fertigung gekommen. Vor dem Deep Learning habe ich zu Beginn meiner Laufbahn in der industriellen Automatisierung in Pune gearbeitet und SPS-Logik sowie SCADA-Systeme entwickelt, die Produktionslinien am Laufen hielten. Dort habe ich gelernt, Software zu bauen, die sich in der realen Welt bewähren muss, nicht nur im Benchmark.\n\nSeit dem Wechsel ins maschinelle Lernen habe ich an einer Vielzahl von Computer-Vision-Problemen gearbeitet: 6D-Posenschätzung für robotisches Bin Picking, Bildsegmentierung für Mikroskopie und industrielle Inspektion, Deep Learning für biomedizinische Signale und Stereo-Tiefenschätzung für die Automobilbranche. Zuletzt hat sich mein Fokus auf 3D-Rekonstruktion verlagert — druckbare, maßstabsgetreue Modelle allein aus einem Handyvideo zu bauen.\n\nBei all dem macht mir am meisten Spaß, Forschung in etwas Funktionierendes zu verwandeln: Datensätze aufzubauen, Modelle zu trainieren und sie schnell und schlank genug zu machen, dass sie auf echter Hardware laufen."
    },
    education: [
      { degree: { en: "M.Eng. Mechatronics", de: "M.Eng. Mechatronik" }, school: "Technische Hochschule Rosenheim, Germany", href: A + "MEng.pdf" },
      { degree: { en: "B.Tech. Mechanical Engineering", de: "B.Tech. Maschinenbau" }, school: "Vellore Institute of Technology, India", href: A + "BTech.pdf" }
    ],
    languages: [
      { name: { en: "English", de: "Englisch" }, level: "C1" },
      { name: { en: "German", de: "Deutsch" }, level: "B1" },
      { name: { en: "Hindi, Marathi", de: "Hindi, Marathi" }, level: { en: "Native", de: "Muttersprache" } }
    ],
    certifications: [
      { name: { en: "OCI Generative AI Professional", de: "OCI Generative AI Professional" }, issuer: "Oracle", href: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=457089C76BBE01A5FFC772B39ACB8578B553FBCD0130E3EE89ED453EEC082A3C" },
      { name: { en: "Diploma in Advanced Computing", de: "Diplom in Advanced Computing" }, issuer: "CDAC", href: A + "cdac.pdf" },
      { name: { en: "Machine Learning", de: "Machine Learning" }, issuer: "DeepLearning.AI · Coursera", href: A + "ML.pdf" },
      { name: { en: "Advanced Computer Vision with TensorFlow", de: "Advanced Computer Vision mit TensorFlow" }, issuer: "DeepLearning.AI · Coursera", href: A + "ACVT.pdf" },
      { name: { en: "Generative Deep Learning with TensorFlow", de: "Generative Deep Learning mit TensorFlow" }, issuer: "DeepLearning.AI · Coursera", href: A + "GDLT.pdf" }
    ]
  },

  skills: [
    { group: { en: "3D Perception", de: "3D-Wahrnehmung" }, items: ["Stereo Vision", "Multi-Sensor Fusion", "Triangulation", "Calibration", "3D Reconstruction", "Point Clouds", "SLAM"] },
    { group: { en: "Deep Learning", de: "Deep Learning" }, items: ["2D/3D Detection", "Tracking", "Segmentation", "Anomaly Detection", "Domain Randomization"] },
    { group: { en: "Frameworks & Tools", de: "Frameworks & Tools" }, items: ["PyTorch", "TensorFlow", "OpenCV", "ONNX Runtime", "CUDA", "Unreal Engine 5", "COLMAP", "Open3D", "Docker"] },
    { group: { en: "Programming", de: "Programmierung" }, items: ["Python", "C++", "Bash", "MATLAB"] },
    { group: { en: "Optimization & Deployment", de: "Optimierung & Deployment" }, items: ["TensorRT", "Quantization", "Pruning", "AWS", "GitHub Actions"] },
    { group: { en: "Generative AI / LLMs", de: "Generative KI / LLMs" }, items: ["LangChain", "FAISS", "Hugging Face", "RAG", "Streamlit"] }
  ],

  experience: [
    {
      role: { en: "Software Engineer", de: "Software Engineer" },
      org: "PALPRINT GmbH",
      place: "Lippstadt, Germany",
      dates: { en: "Jan 2026 – present", de: "Jan 2026 – heute" },
      summary: {
        en: "Video-to-3D reconstruction for automated packaging: a metric-scaled model from about 20 frames, end to end in under two minutes, scaled from a coin in frame — plus the PALPRINT software features around it.",
        de: "Video-zu-3D-Rekonstruktion für automatisierte Verpackung: ein metrisch skaliertes Modell aus rund 20 Bildern, komplett in unter zwei Minuten, skaliert über eine Münze im Bild — samt der PALPRINT-Software-Features darum herum."
      },
      detail: {
        en: [
          "Reconstruct 3D geometry from ordinary video: camera pose estimation, dense reconstruction and meshing.",
          "Cut the capture requirement to roughly 20 frames and the full pipeline to under two minutes.",
          "Recover true metric scale from a euro coin in frame, so the model can be measured and printed at size.",
          "Develop features in the PALPRINT software across the capture-to-model pipeline.",
          "Work alongside the machine side, where the packaging is actually 3D-printed, so geometry and tolerances have to hold up physically."
        ],
        de: [
          "3D-Geometrie aus normalem Video rekonstruieren: Kamerapose-Schätzung, dichte Rekonstruktion und Meshing.",
          "Aufnahmeaufwand auf rund 20 Bilder und die gesamte Pipeline auf unter zwei Minuten reduziert.",
          "Echten metrischen Maßstab über eine Euromünze im Bild rekonstruiert — das Modell ist messbar und maßhaltig druckbar.",
          "Features der PALPRINT-Software entlang der Pipeline von der Aufnahme bis zum Modell entwickeln.",
          "Enge Zusammenarbeit mit der Maschinenseite, auf der die Verpackung tatsächlich 3D-gedruckt wird — Geometrie und Toleranzen müssen physisch stimmen."
        ]
      },
      stack: "Python · 3D Reconstruction · Computer Vision · Meshing",
      images: []
    },
    {
      role: { en: "Master's Thesis Researcher — Stereo Vision for Adaptive Headlights", de: "Masterarbeit — Stereo Vision für adaptive Scheinwerfer" },
      org: "FORVIA HELLA",
      place: "Lippstadt, Germany",
      dates: { en: "Mar 2024 – Nov 2024", de: "Mär 2024 – Nov 2024" },
      summary: {
        en: "A lightweight stereo CNN for long-range depth and 3D object localization: 9,000+ synthetic pairs generated in Unreal Engine 5, 3% D1-all on KITTI, inference cut from 120 ms to 70 ms.",
        de: "Ein leichtgewichtiges Stereo-CNN für Tiefenschätzung auf große Entfernung und 3D-Lokalisierung: über 9.000 synthetische Paare in Unreal Engine 5, 3% D1-all auf KITTI, Inferenz von 120 ms auf 70 ms reduziert."
      },
      detail: {
        en: [
          "Designed a stereo CNN (autoencoder + cost-volume fusion) for real-time dense depth.",
          "Generated ~9,000 synthetic stereo pairs in Unreal Engine 5 with calibrated intrinsics, simulating glare, rain and reflections.",
          "Applied domain randomization and fine-tuned on real test drives to close the sim-to-real gap.",
          "Fused depth with YOLO detections for object localization and trajectory estimation.",
          "Exported to ONNX and validated latency on embedded GPUs with the hardware and optics teams."
        ],
        de: [
          "Stereo-CNN (Autoencoder + Cost-Volume-Fusion) für dichte Tiefenschätzung in Echtzeit entworfen.",
          "Rund 9.000 synthetische Stereopaare in Unreal Engine 5 mit kalibrierten Intrinsics erzeugt — inkl. Blendung, Regen und Reflexionen.",
          "Domain Randomization angewendet und auf echten Testfahrten nachtrainiert, um die Sim-to-Real-Lücke zu schließen.",
          "Tiefe mit YOLO-Detektionen für Objektlokalisierung und Trajektorienschätzung fusioniert.",
          "Nach ONNX exportiert und Latenz auf Embedded-GPUs mit Hardware- und Optikteam validiert."
        ]
      },
      stack: "PyTorch · Unreal Engine 5 · YOLOv8 · CUDA · ONNX Runtime · Docker",
      images: [
        { src: A + "thesis/model%20architecture.png", alt: "Stereo network architecture — autoencoder with cost-volume fusion" },
        { src: A + "thesis/Ego%20vehicle.jpg", alt: "Ego vehicle test rig used for the real test drives" },
        { src: A + "thesis/kitti%20disparity%20prediction.png", alt: "Disparity prediction on KITTI" },
        { src: A + "thesis/predicted%20depth%20map.jpg", alt: "Predicted dense depth map" },
        { src: A + "thesis/predicted%20depth%20of%20objects.jpg", alt: "Per-object depth read out of the disparity map" }
      ]
    },
    {
      role: { en: "AI Research Intern — AHEAD Project", de: "AI Research Intern — Projekt AHEAD" },
      org: "FORVIA HELLA",
      place: "Lippstadt, Germany",
      dates: { en: "Aug 2023 – Feb 2024", de: "Aug 2023 – Feb 2024" },
      summary: {
        en: "Perception models for adaptive headlights: glare-robust detection, lane segmentation and multi-object tracking, with ~30% better night-time mAP than baseline.",
        de: "Wahrnehmungsmodelle für adaptive Scheinwerfer: blendungsrobuste Detektion, Fahrspursegmentierung und Multi-Object-Tracking — ca. 30% besseres Nacht-mAP als die Baseline."
      },
      detail: {
        en: [
          "Fine-tuned YOLOv8 for glare-robust detection with heavy augmentation and hyper-parameter search.",
          "Built a modular pipeline combining detection, segmentation and DeepSORT tracking.",
          "Implemented stereo triangulation and calibration for real-world 3D localization and lane geometry.",
          "Ran robustness studies across lighting, motion blur and sensor noise.",
          "Validated models in prototype headlight systems with the optics and embedded teams."
        ],
        de: [
          "YOLOv8 für blendungsrobuste Detektion mit starker Augmentierung und Hyperparametersuche nachtrainiert.",
          "Modulare Pipeline aus Detektion, Segmentierung und DeepSORT-Tracking aufgebaut.",
          "Stereo-Triangulation und Kalibrierung für 3D-Lokalisierung und Fahrspurgeometrie implementiert.",
          "Robustheitsstudien zu Beleuchtung, Bewegungsunschärfe und Sensorrauschen durchgeführt.",
          "Modelle mit Optik- und Embedded-Team in Prototyp-Scheinwerfern validiert."
        ]
      },
      stack: "Python · PyTorch · OpenCV · YOLOv8 · DeepSORT · ONNX Runtime · Docker",
      images: [
        { src: A + "internship/object%20dtection%20with%20yolo.jpg", alt: "Glare-robust object detection with YOLOv8" },
        { src: A + "internship/feature%20matching.png", alt: "Stereo feature matching between left and right views" },
        { src: A + "internship/lane%20segmentation.jpg", alt: "Lane segmentation at night" },
        { src: A + "internship/object%20matching%20and%20tracking.png", alt: "Multi-object matching and DeepSORT tracking" },
        { src: A + "internship/road%20trajectory.png", alt: "Estimated road trajectory" }
      ]
    },
    {
      role: { en: "Automation Engineer", de: "Automatisierungsingenieur" },
      org: "Indpro Electronic Systems",
      place: "Pune, India",
      dates: { en: "May 2019 – Mar 2020", de: "Mai 2019 – Mär 2020" },
      summary: {
        en: "PLC control logic and HMI dashboards for sugar-industry plants, plus on-site commissioning across several facilities.",
        de: "SPS-Steuerungslogik und HMI-Dashboards für Zuckerfabriken sowie Inbetriebnahme vor Ort in mehreren Werken."
      },
      detail: {
        en: [
          "Developed and deployed PLC control logic on ABB AC800M for process automation.",
          "Designed HMI/SCADA dashboards and supported commissioning and troubleshooting on site."
        ],
        de: [
          "SPS-Steuerungslogik auf ABB AC800M für die Prozessautomatisierung entwickelt und in Betrieb genommen.",
          "HMI-/SCADA-Dashboards entworfen und Inbetriebnahme sowie Fehlersuche vor Ort begleitet."
        ]
      },
      stack: "ABB AC800M · SCADA · Industrial Automation",
      images: []
    }
  ],

  projects: [
    {
      featured: true,
      image: A + "depth.png",
      title: { en: "Deep Stereo Vision for Night Driving", de: "Deep Stereo Vision für Nachtfahrten" },
      outcome: { en: "95% depth accuracy at 30 m, 3% D1-all on KITTI, 70 ms per frame.", de: "95% Tiefengenauigkeit bei 30 m, 3% D1-all auf KITTI, 70 ms pro Bild." },
      blurb: { en: "A lightweight stereo network built for adaptive headlights, trained largely on synthetic night scenes.", de: "Ein leichtgewichtiges Stereonetz für adaptive Scheinwerfer, überwiegend auf synthetischen Nachtszenen trainiert." },
      tags: ["PyTorch", "Unreal Engine 5", "Stereo Depth", "ONNX"],
      metrics: [{ value: "3%", label: { en: "D1-all", de: "D1-all" } }, { value: "70 ms", label: { en: "latency", de: "Latenz" } }],
      images: [
        { src: A + "night-lane-detection.jpg", alt: "Road-edge detection on a night driving scene" },
        { src: A + "night-road-detection.jpg", alt: "Night-time roadside detection with confidence scores" },
        { src: A + "depth.png", alt: "Predicted depth on a night driving scene" },
        { src: A + "thesis/model%20architecture.png", alt: "Stereo network architecture" },
        { src: A + "thesis/kitti%20disparity%20prediction.png", alt: "Disparity prediction on KITTI" }
      ],
      detail: {
        en: [
          "Lightweight stereo CNN in PyTorch for real-time depth in low-light automotive scenes.",
          "9,000+ synthetic stereo pairs generated in Unreal Engine 5 across illumination, reflection and weather variations.",
          "Latency reduced 120 → 70 ms via ONNX Runtime optimization."
        ],
        de: [
          "Leichtgewichtiges Stereo-CNN in PyTorch für Echtzeit-Tiefe in dunklen Fahrszenen.",
          "Über 9.000 synthetische Stereopaare in Unreal Engine 5 mit variierender Beleuchtung, Reflexion und Wetterlage.",
          "Latenz mittels ONNX-Runtime-Optimierung von 120 auf 70 ms reduziert."
        ]
      },
      links: [{ label: { en: "GitHub", de: "GitHub" }, href: "https://github.com/vedantchavan004/Deep-Stereo-Vision-for-nighttime-Driving-Scenes" }]
    },
    {
      featured: true,
      image: A + "binpicking.png",
      title: { en: "Custom YOLO for Robotic Bin Picking", de: "Custom YOLO für robotisches Bin Picking" },
      outcome: { en: "98% grasp success on an ABB YuMi cobot in real industrial tests.", de: "98% Greiferfolg mit einem ABB-YuMi-Cobot in echten Industrietests." },
      blurb: { en: "6D pose estimation from a hybrid synthetic + real dataset, wired straight into a cobot's pick-and-place loop.", de: "6D-Posenschätzung aus einem hybriden synthetisch-realen Datensatz, direkt in den Pick-and-Place-Zyklus eines Cobots integriert." },
      tags: ["TensorFlow", "YOLO", "6D Pose", "Blender", "OpenCV"],
      metrics: [{ value: "98%", label: { en: "grasp success", de: "Greiferfolg" } }],
      images: [
        { src: A + "binpicking.png", alt: "6D pose estimation on parts in a bin" },
        { src: A + "binpicking-cobot.jpg", alt: "ABB YuMi cobot picking parts from a bin", fit: "contain" },
        { src: A + "yolo-implementation.jpeg", alt: "Pipeline architecture — training and prediction paths through the YOLO modules", fit: "contain" }
      ],
      detail: {
        en: [
          "YOLO-based 6D pose estimation in TensorFlow for detection and orientation prediction.",
          "Hybrid dataset from Blender renders plus real camera images, for robustness to lighting and occlusion.",
          "Integrated with an ABB YuMi cobot for automated pick-and-place.",
          "Tuned inference speed and detection stability for edge deployment."
        ],
        de: [
          "YOLO-basierte 6D-Posenschätzung in TensorFlow für Detektion und Orientierungsvorhersage.",
          "Hybrider Datensatz aus Blender-Renderings und echten Kamerabildern für Robustheit gegen Licht und Verdeckung.",
          "In einen ABB-YuMi-Cobot für automatisiertes Pick-and-Place integriert.",
          "Inferenzgeschwindigkeit und Detektionsstabilität für Edge-Deployment optimiert."
        ]
      },
      links: [{ label: { en: "GitHub", de: "GitHub" }, href: "https://github.com/vedantchavan004/YOLO-For-Object-Detection-and-Localization-in-Bin-Picking-Application" }]
    },
    {
      featured: true,
      image: A + "castle.PNG",
      title: { en: "3D Reconstruction with Gaussian Splatting", de: "3D-Rekonstruktion mit Gaussian Splatting" },
      outcome: { en: "A phone video turned into a navigable, photorealistic 3D scene.", de: "Ein Handyvideo als begehbare, fotorealistische 3D-Szene." },
      blurb: { en: "COLMAP for poses, Gaussian Splatting for rendering, Open3D for inspection and mesh experiments.", de: "COLMAP für Posen, Gaussian Splatting für das Rendering, Open3D für Inspektion und Mesh-Experimente." },
      tags: ["COLMAP", "Gaussian Splatting", "Open3D", "Supersplat"],
      metrics: [],
      detail: {
        en: [
          "Extracted camera poses and sparse point clouds with COLMAP from monocular video.",
          "Rendered photorealistic novel views with Gaussian Splatting, including transparency and shading.",
          "Inspected results in Open3D and explored mesh conversion workflows."
        ],
        de: [
          "Kameraposen und spärliche Punktwolken mit COLMAP aus monokularem Video extrahiert.",
          "Fotorealistische neue Ansichten mit Gaussian Splatting gerendert, inkl. Transparenz und Shading.",
          "Ergebnisse in Open3D geprüft und Mesh-Konvertierung untersucht."
        ]
      },
      links: [{ label: { en: "Live demo", de: "Live-Demo" }, href: "https://vedantchavan004.github.io/3D-Reconstruction-using-Gaussian-Splatting/" }]
    },
    {
      featured: false,
      image: A + "bikes.png",
      title: { en: "Instance Segmentation on AWS", de: "Instanzsegmentierung auf AWS" },
      outcome: { en: "YOLOv11 served through FastAPI, containerized and deployed with GitHub Actions CI/CD.", de: "YOLOv11 via FastAPI ausgeliefert, containerisiert und per GitHub-Actions-CI/CD deployt." },
      blurb: { en: "", de: "" },
      tags: ["YOLOv11", "FastAPI", "Docker", "AWS", "CI/CD"],
      metrics: [],
      detail: { en: ["REST API over YOLOv11 instance segmentation, with an image-upload web front end.", "Dockerized, pushed to AWS ECR and deployed on EC2.", "Continuous deployment via GitHub Actions."], de: ["REST-API über YOLOv11-Instanzsegmentierung mit Web-Frontend zum Bild-Upload.", "Dockerisiert, in AWS ECR gepusht und auf EC2 deployt.", "Continuous Deployment über GitHub Actions."] },
      links: [{ label: { en: "GitHub", de: "GitHub" }, href: "https://github.com/vedantchavan004/Image-Segmentation-AWS-MLOps" }]
    },
    {
      featured: false,
      image: A + "result_007.png",
      title: { en: "Anomaly Detection for Industrial Inspection", de: "Anomalieerkennung für die Industrieinspektion" },
      outcome: { en: "PaDiM on MobileNetV3 features localizing defects on MVTec AD, exported to ONNX for cross-platform inference.", de: "PaDiM auf MobileNetV3-Features zur Defektlokalisierung auf MVTec AD, nach ONNX exportiert für plattformübergreifende Inferenz." },
      blurb: { en: "", de: "" },
      tags: ["Anomaly Detection", "PaDiM", "ONNX", "MobileNetV3"],
      metrics: [],
      detail: { en: ["Multi-level MobileNetV3-Small features reduced to 100-D, scored with a pixel-level Mahalanobis distance.", "Feature extractor exported to ONNX and run via ONNX Runtime.", "Heatmap and binary-mask localization on the MVTec AD transistor category (98th-percentile threshold)."], de: ["Mehrstufige MobileNetV3-Small-Features auf 100-D reduziert, bewertet über pixelweise Mahalanobis-Distanz.", "Feature-Extraktor nach ONNX exportiert und über ONNX Runtime ausgeführt.", "Heatmap- und Binärmasken-Lokalisierung auf der MVTec-AD-Kategorie „transistor“ (98%-Perzentil-Schwelle)."] },
      links: [{ label: { en: "GitHub", de: "GitHub" }, href: "https://github.com/vedantchavan004/Testing-Anomaly-Detection-with-PaDiM-ONNX" }]
    },
    {
      featured: false,
      image: A + "unet_result.png",
      title: { en: "U-Net for Biological Image Segmentation", de: "U-Net für biologische Bildsegmentierung" },
      outcome: { en: "Dice 0.89 / IoU 0.82 segmenting nuclei in fluorescence microscopy.", de: "Dice 0,89 / IoU 0,82 bei der Segmentierung von Zellkernen in Fluoreszenzmikroskopie." },
      blurb: { en: "", de: "" },
      tags: ["PyTorch", "U-Net", "Segmentation"],
      metrics: [{ value: "0.89", label: { en: "Dice", de: "Dice" } }],
      detail: { en: ["Instance masks parsed into binary labels with CLAHE and Gaussian blur preprocessing.", "Lightweight U-Net trained for 100 epochs.", "Inference-ready model prepared in Colab."], de: ["Instanzmasken mit CLAHE- und Gauß-Vorverarbeitung in Binärlabels überführt.", "Leichtgewichtiges U-Net über 100 Epochen trainiert.", "Inferenzfertiges Modell in Colab vorbereitet."] },
      links: [{ label: { en: "GitHub", de: "GitHub" }, href: "https://github.com/vedantchavan004/Biological-Image-Segmentation" }]
    },
    {
      featured: false,
      image: A + "chat.PNG",
      title: { en: "Conversational AI with RAG", de: "Konversations-KI mit RAG" },
      outcome: { en: "A GPT assistant with FAISS retrieval, deployed on Hugging Face Spaces.", de: "Ein GPT-Assistent mit FAISS-Retrieval, deployt auf Hugging Face Spaces." },
      blurb: { en: "", de: "" },
      tags: ["Hugging Face", "FAISS", "RAG", "Docker"],
      metrics: [],
      detail: { en: ["Retrieval-augmented generation over a personal knowledge base with FAISS vector search.", "Packaged with Docker and hosted on Hugging Face Spaces."], de: ["Retrieval-Augmented Generation über eine persönliche Wissensbasis mit FAISS-Vektorsuche.", "Mit Docker verpackt und auf Hugging Face Spaces gehostet."] },
      links: [{ label: { en: "Live demo", de: "Live-Demo" }, href: "https://huggingface.co/spaces/vedantchavan097/AI-chatbot" }]
    },
    {
      featured: false,
      image: A + "gauge_output.png",
      title: { en: "GaugeVision", de: "GaugeVision" },
      outcome: { en: "Analog gauge readings and QR asset tags read together in one pass.", de: "Analoge Zeigerstände und QR-Anlagen-Tags in einem Durchgang gelesen." },
      blurb: { en: "", de: "" },
      tags: ["YOLOv11 Pose", "OpenCV", "Roboflow"],
      metrics: [],
      detail: { en: ["Custom YOLOv11 pose model detecting keypoints on analog pressure gauges.", "OpenCV QR detection for identification tags near each gauge.", "Combined overlay showing needle direction and QR payload together."], de: ["Eigenes YOLOv11-Pose-Modell zur Keypoint-Erkennung an analogen Manometern.", "OpenCV-QR-Erkennung für Identifikations-Tags an den Messgeräten.", "Kombinierte Overlay-Ansicht aus Zeigerrichtung und QR-Inhalt."] },
      links: [{ label: { en: "GitHub", de: "GitHub" }, href: "https://github.com/vedantchavan004/GaugeVision" }]
    },
    {
      featured: false,
      image: A + "qt_result.png",
      title: { en: "Edge Detector GUI (Qt + C++)", de: "Kantendetektor-GUI (Qt + C++)" },
      outcome: { en: "A desktop app for live Sobel/Canny tuning, built on Qt and OpenCV.", de: "Desktop-App zum Live-Tuning von Sobel/Canny, gebaut mit Qt und OpenCV." },
      blurb: { en: "", de: "" },
      tags: ["C++", "Qt", "OpenCV", "CMake"],
      metrics: [],
      detail: { en: ["OpenCV integrated with Qt for real-time filtering.", "Sliders and dropdowns for live threshold and filter selection.", "Modular C++ with CMake for cross-platform builds."], de: ["OpenCV in Qt für Echtzeitfilterung integriert.", "Slider und Dropdowns für Live-Schwellenwerte und Filterauswahl.", "Modulares C++ mit CMake für plattformübergreifende Builds."] },
      links: [{ label: { en: "GitHub", de: "GitHub" }, href: "https://github.com/vedantchavan004/QT_GUI_edge_detector" }]
    },
    {
      featured: false,
      image: A + "vqa.png",
      title: { en: "BLIP-1 Optimization for Captioning", de: "BLIP-1-Optimierung für Bildbeschreibung" },
      outcome: { en: "1.4× CPU speedup from quantization and pruning, with no caption-quality loss.", de: "1,4× CPU-Beschleunigung durch Quantisierung und Pruning, ohne Qualitätsverlust." },
      blurb: { en: "", de: "" },
      tags: ["Quantization", "L1 Pruning", "BLIP"],
      metrics: [{ value: "1.4×", label: { en: "speedup", de: "Beschleunigung" } }],
      detail: { en: ["Baseline CPU inference at 0.69 s per caption.", "Dynamic quantization of all linear layers cut it to 0.48 s.", "30% L1 pruning combined with quantization gave a 1.40× speedup at equal quality."], de: ["Baseline-CPU-Inferenz bei 0,69 s pro Bildbeschreibung.", "Dynamische Quantisierung aller Linear-Layer senkte sie auf 0,48 s.", "30% L1-Pruning kombiniert mit Quantisierung ergab 1,40× Beschleunigung bei gleicher Qualität."] },
      links: [{ label: { en: "GitHub", de: "GitHub" }, href: "https://github.com/vedantchavan004/Multimodal-VQA" }]
    },
    {
      featured: false,
      image: A + "project_3.png",
      title: { en: "Stereo Point Cloud Reconstruction", de: "Stereo-Punktwolken-Rekonstruktion" },
      outcome: { en: "Dense point clouds from stereo pairs via tuned SGBM and disparity filtering.", de: "Dichte Punktwolken aus Stereopaaren durch getuntes SGBM und Disparitätsfilterung." },
      blurb: { en: "", de: "" },
      tags: ["OpenCV", "SGBM", "Calibration", "3D Vision"],
      metrics: [],
      detail: { en: ["Stereo pipeline in OpenCV computing disparity maps and reconstructing point clouds.", "SGBM parameter tuning plus filtering to suppress noise.", "PLY export for downstream 3D tooling."], de: ["Stereo-Pipeline in OpenCV zur Berechnung von Disparitätskarten und Punktwolken.", "SGBM-Parametertuning und Filterung zur Rauschunterdrückung.", "PLY-Export für weiterführende 3D-Werkzeuge."] },
      links: [{ label: { en: "GitHub", de: "GitHub" }, href: "https://github.com/vedantchavan004/Stereo-Point-Cloud" }]
    },
    {
      featured: false,
      image: A + "unet.png",
      title: { en: "Defect Detection in Prints", de: "Fehlererkennung im Druckbild" },
      outcome: { en: "U-Net segmentation of print defects at 95% precision on injected-defect data.", de: "U-Net-Segmentierung von Druckfehlern mit 95% Präzision auf Daten mit injizierten Defekten." },
      blurb: { en: "", de: "" },
      tags: ["U-Net", "scikit-image", "Augmentation"],
      metrics: [],
      detail: { en: ["Synthetic defect injection to build a labelled training set.", "U-Net segmentation reaching 95% precision.", "Batch pipeline processing 1,000+ images per day."], de: ["Synthetische Defektinjektion zum Aufbau eines gelabelten Trainingssatzes.", "U-Net-Segmentierung mit 95% Präzision.", "Batch-Pipeline für über 1.000 Bilder pro Tag."] },
      links: [{ label: { en: "GitHub", de: "GitHub" }, href: "https://github.com/vedantchavan004/Unet" }]
    },
    {
      featured: false,
      image: A + "predictive.png",
      title: { en: "Predictive Maintenance with XGBoost", de: "Predictive Maintenance mit XGBoost" },
      outcome: { en: "Failure prediction on industrial sensor data at 0.95 F1 for the failure class.", de: "Ausfallvorhersage auf industriellen Sensordaten mit 0,95 F1 für die Ausfallklasse." },
      blurb: { en: "", de: "" },
      tags: ["XGBoost", "Python", "Feature Engineering"],
      metrics: [],
      detail: { en: ["End-to-end XGBoost pipeline for industrial failure prediction.", "Class imbalance handled with weighting and threshold tuning.", "Automated reporting of predicted-failure windows."], de: ["Durchgängige XGBoost-Pipeline zur industriellen Ausfallvorhersage.", "Klassenungleichgewicht über Gewichtung und Schwellenwert-Tuning behandelt.", "Automatisierte Berichte über vorhergesagte Ausfallfenster."] },
      links: [{ label: { en: "GitHub", de: "GitHub" }, href: "https://github.com/vedantchavan004/Predictive-Maintenance-Using-XGBoost" }]
    },
    {
      featured: false,
      image: A + "RL.png",
      title: { en: "Reinforcement Learning for an RRR Robot", de: "Reinforcement Learning für einen RRR-Roboter" },
      outcome: { en: "Trajectory policy for a 3-DOF arm: 30% better end-effector accuracy over 1,000 episodes.", de: "Trajektorien-Policy für einen 3-DOF-Arm: 30% bessere Endeffektor-Genauigkeit über 1.000 Episoden." },
      blurb: { en: "", de: "" },
      tags: ["Reinforcement Learning", "MATLAB", "Kinematics"],
      metrics: [],
      detail: { en: ["RL-based trajectory optimization in MATLAB for a 3-DOF manipulator.", "Trained over 1,000 reward-shaped episodes, cutting path deviation by 25%.", "85% success rate selecting optimal paths in simulation."], de: ["RL-basierte Trajektorienoptimierung in MATLAB für einen 3-DOF-Manipulator.", "Über 1.000 belohnungsgeformte Episoden trainiert, Pfadabweichung um 25% reduziert.", "85% Erfolgsquote bei der Wahl optimaler Pfade in der Simulation."] },
      links: [{ label: { en: "GitHub", de: "GitHub" }, href: "https://github.com/vedantchavan004/Reinforcement-Learning-For-3DOF-Robot" }]
    },
    {
      featured: false,
      image: A + "ecg.png",
      title: { en: "ECG Signal Classification", de: "EKG-Signalklassifikation" },
      outcome: { en: "Three-class ECG classification — arrhythmia, heart failure and normal rhythm — from time-frequency scalograms.", de: "Dreiklassige EKG-Klassifikation — Arrhythmie, Herzinsuffizienz und Normalrhythmus — aus Zeit-Frequenz-Skalogrammen." },
      blurb: { en: "", de: "" },
      tags: ["MATLAB", "CWT", "Transfer Learning"],
      metrics: [],
      detail: { en: ["ECG signals converted to scalograms with the Continuous Wavelet Transform (and STFT).", "Pretrained CNNs (GoogLeNet, AlexNet, SqueezeNet) transfer-learned to classify ARR, CHF and NSR.", "Built and evaluated in MATLAB."], de: ["EKG-Signale mit der kontinuierlichen Wavelet-Transformation (und STFT) in Skalogramme überführt.", "Vortrainierte CNNs (GoogLeNet, AlexNet, SqueezeNet) per Transfer Learning zur Klassifikation von ARR, CHF und NSR.", "In MATLAB umgesetzt und ausgewertet."] },
      links: [{ label: { en: "GitHub", de: "GitHub" }, href: "https://github.com/vedantchavan004/ECG-Classification" }]
    }
  ],

  contact: {
    blurb: {
      en: "Perception role, a stereo problem you can't get to converge, or a question about synthetic data — write, and I'll answer.",
      de: "Eine Perception-Stelle, ein Stereo-Problem, das nicht konvergiert, oder eine Frage zu synthetischen Daten — schreib mir, ich antworte."
    },
    fields: {
      name: { en: "Name", de: "Name" },
      email: { en: "Email", de: "E-Mail" },
      message: { en: "Message", de: "Nachricht" }
    },
    send: { en: "Send message", de: "Nachricht senden" }
  }
};

window.VC = { content: content, t: t, tList: tList };
