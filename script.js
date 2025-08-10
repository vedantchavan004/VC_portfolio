// Hamburger Menu Toggle
function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  if (menu && icon) {
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }
}

document.addEventListener('DOMContentLoaded', () => {

// --- Download CV Dropdown ---
(function() {
  const btn = document.getElementById('download-cv-btn');
  const menu = document.getElementById('cv-dropdown');
  if (!btn || !menu) return;
  const openMenu = () => { menu.classList.add('open'); btn.setAttribute('aria-expanded', 'true'); };
  const closeMenu = () => { menu.classList.remove('open'); btn.setAttribute('aria-expanded', 'false'); };
  btn.addEventListener('click', (e) => {
    e.stopPropagation();
    if (menu.classList.contains('open')) closeMenu(); else openMenu();
  });
  document.addEventListener('click', (e) => { if (!menu.contains(e.target) && e.target !== btn) closeMenu(); });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeMenu(); });
})();


  // --- Language Toggle / i18n ---
  const I18N = {
  "en": {
    "nav.about": "About",
    "nav.skills": "Skills",
    "nav.experience": "Experience",
    "nav.projects": "Projects",
    "nav.contact": "Contact",
    "profile.hello": "Hello, I'm",
    "buttons.download_cv": "Download CV",
    "buttons.contact_info": "Contact Info",
    "about.subtitle": "Get To Know More",
    "about.title": "About Me",
    "skills.subtitle": "Explore My",
    "skills.title": "Skills",
    "skills.level.advanced": "Experienced",
    "skills.level.intermediate": "Intermediate",
    "experience.subtitle": "Browse My Recent",
    "experience.title": "Experience",
    "experience.role.01": "AI Research Intern",
    "experience.role.02": "Master’s Thesis Researcher",
    "projects.subtitle": "Browse My Recent",
    "projects.title": "Projects",
    "buttons.view_more": "View More Projects",
    "buttons.show_less": "Show Less",
    "buttons.more_details": "More Details",
    "buttons.less_details": "Less Details",
    "buttons.github": "Github",
    "buttons.live_demo": "Live Demo",
    "languages.subtitle": "Additional Skills",
    "languages.title": "Language Proficiency",
    "contact.subtitle": "Get in Touch",
    "contact.title": "Contact Me",
    "contact.name": "Name",
    "contact.email": "Email",
    "contact.subject": "Subject",
    "contact.message": "Message",
    "contact.send": "Send Message",
    "contact.name_ph": "Your Name",
    "contact.email_ph": "you@example.com",
    "contact.subject_ph": "Subject",
    "contact.message_ph": "Your Message",
    "feedback.success": "Message sent successfully!",
    "feedback.invalid": "Please fill all fields correctly.",
    "feedback.fail": "Failed to send message. Please try again.",
    "typingTexts": [
      "AI Engineer",
      "Computer Vision Engineer",
      "Machine Learning Engineer",
      "Deep Learning Engineer"
    ],
    "about.blurb": "I'm Vedant Sanjay Chavan – a passionate AI Engineer with expertise in Machine Learning, Deep Learning, Computer Vision, and Generative AI. With hands-on experience at HELLA GmbH & Co. and a strong academic background (M.Eng. in Mechatronics and B.Tech. in Mechanical), I blend creativity with technical excellence to transform complex data into real-world solutions.",
    "about.stat.years": "2+ Years",
    "about.stat.years_desc": "Experience in developing AI solutions",
    "about.stat.meng_field": "TH Rosenheim, Germany",
    "about.stat.btech_field": "Vellore Institute of Technology, India",
    "aria.linkedin": "LinkedIn Profile",
    "aria.github": "GitHub Profile",
    "experience.indpro.role": "Automation Engineer",
    "experience.indpro.b1": "Developed and deployed PLC control logic (ABB AC800M) for sugar industry automation systems.",
    "experience.indpro.b2": "Designed HMI dashboards and supported on-site commissioning and troubleshooting across multiple facilities.",
    "projects.p1.title": "Custom YOLO for Robotic Bin Picking",
    "projects.p1.info": "Developed a custom YOLO model for detecting objects in bin picking tasks, achieving 95% precision in orientation detection.",
    "projects.p1.d1": "Developed TensorFlow-based YOLO model for precise object detection &amp; orientation estimation.",
    "projects.p1.d2": "Trained the model using synthetic (Blender) &amp; real-world datasets, achieving 95% precision.",
    "projects.p1.d3": "Optimized the model to enhance AI performance under industrial conditions, ensuring reliable automation.",
    "projects.p2.title": "Deep Stereo Vision for Nighttime Driving Scenes",
    "projects.p2.info": "Designed a CNN-based depth estimation model using PyTorch, achieving 90% accuracy in low-light scenarios.",
    "projects.p2.d1": "Designed a CNN-based depth estimation model using PyTorch, for low-light scenarios.",
    "projects.p2.d2": "Generated synthetic training datasets using Unreal Engine 5, improving model generalization.",
    "projects.p2.d3": "Achieved 90% accuracy in depth estimation, outperforming conventional automotive AI methods",
    "projects.p3.title": "3D Reconstruction with Gaussian Splatting",
    "projects.p3.info": "Converted monocular smartphone video into a dense 3D scene using COLMAP preprocessing and Gaussian Splatting rendering.",
    "projects.p3.d1": "Extracted camera poses and sparse point clouds using <strong>COLMAP</strong> from monocular input video.",
    "projects.p3.d2": "Used <strong>Gaussian Splatting</strong> to render photorealistic 3D views with transparency and shading effects.",
    "projects.p3.d3": "Visualized and explored outputs in <strong>Open3D</strong>, and investigated mesh conversion workflows.",
    "projects.p3.d4": "Handled lighting, occlusion, and splat shaders for high-fidelity rendering of complex indoor scenes.",
    "projects.p4.title": "Object Instance segmentation with FastAPI and AWS",
    "projects.p4.info": "YOLOv11 instance segmentation deployed via FastAPI, containerized with Docker on AWS EC2/ECR, and automated using GitHub Actions CI/CD.",
    "projects.p4.d1": "Real-Time Object Detection &amp; Segmentation: Uses YOLOv11 for accurate instance segmentation.",
    "projects.p4.d2": "FastAPI Backend: Serves the model predictions via REST API.",
    "projects.p4.d3": "User-Friendly Web Interface: Allows users to upload images and view detected objects.",
    "projects.p4.d4": "Dockerized &amp; Cloud-Hosted: Containerized using Docker, pushed to AWS ECR, and deployed on AWS EC2.",
    "projects.p4.d5": "Automated CI/CD Pipeline: Uses GitHub Actions for continuous deployment.",
    "projects.p5.title": "PaDiM-based Anomaly Detection",
    "projects.p5.info": "Built a lightweight visual anomaly detection system using PaDiM and ONNX for industrial defect detection.",
    "projects.p5.d1": "Extracted multi-level features from MobileNetV3 and computed Mahalanobis-based anomaly scores at pixel level.",
    "projects.p5.d2": "Exported the feature extractor to ONNX and performed inference using ONNX Runtime for cross-platform compatibility.",
    "projects.p5.d3": "Visualized anomalies with heatmaps and binary masks using images from the MVTec AD dataset.",
    "projects.p6.title": "U-Net for Biological Image Segmentation",
    "projects.p6.info": "Trained a U-Net model on fluorescence microscopy images to segment nuclei structures with high accuracy.",
    "projects.p6.d1": "Parsed and preprocessed instance masks into binary labels using CLAHE and Gaussian blur.",
    "projects.p6.d2": "Built a lightweight U-Net in PyTorch; trained for 100 epochs on nuclei segmentation dataset.",
    "projects.p6.d3": "Achieved Dice score of <strong>0.89</strong> and IoU of <strong>0.82</strong> on the validation set.",
    "projects.p6.d4": "Visualized predicted masks and prepared inference-ready model using Colab.",
    "projects.p7.title": "Conversational AI Chatbot with RAG &amp; LLM Fine-Tuning",
    "projects.p7.info": "Developed a GPT-based conversational AI assistant, integrated FAISS vector search, and deployed using Docker &amp; Hugging Face Spaces.",
    "projects.p8.title": "GaugeVision",
    "projects.p8.info": "The goal is to simplify gauge monitoring and tagging by using YOLOv11 pose model and QR detector.",
    "projects.p8.d1": "Trained a custom YOLOv11 pose model to detect keypoints on analog pressure gauges.",
    "projects.p8.d2": "Integrated OpenCV's QR code detector to read identification tags placed on or near gauges.",
    "projects.p8.d3": "Combined both outputs visually to show needle direction and QR data in one intuitive display.",
    "projects.p9.title": "Edge Detector GUI (Qt + OpenCV + C++)",
    "projects.p9.info": "Built an interactive desktop app using Qt and OpenCV for visualizing Sobel and Canny edge detection with real-time threshold sliders.",
    "projects.p9.d1": "Integrated OpenCV with Qt to enable real-time image processing using Sobel and Canny filters.",
    "projects.p9.d2": "Added dynamic UI with sliders and dropdowns for live threshold tuning and filter selection.",
    "projects.p9.d3": "Designed clean modular C++ logic with CMake for cross-platform build compatibility.",
    "projects.p10.title": "BLIP-1 Optimization for Efficient Image Captioning",
    "projects.p10.info": "Optimized BLIP-1 image-captioning on CPU via dynamic quantization and pruning, achieving 1.42× speedup with no accuracy loss.",
    "projects.p10.d1": "Baseline BLIP-1 CPU inference in 0.69 s for correct captions.",
    "projects.p10.d2": "Applied dynamic quantization to all Linear layers, reducing latency to 0.48 s.",
    "projects.p10.d3": "Combined 30% L1 pruning + quantization for a 1.40× speedup.",
    "projects.p10.d4": "Preserved caption quality (“a man and his dog”) across all variants.",
    "projects.p11.title": "Stereo Point Cloud Reconstruction",
    "projects.p11.info": "Built a stereo vision pipeline for 3D point cloud reconstruction, achieving dense 3D models using SGBM and filtering.",
    "projects.p11.d1": "Developed a robust stereo vision pipeline using OpenCV to compute disparity maps and reconstruct 3D point clouds from stereo images, improving depth estimation accuracy.",
    "projects.p11.d2": "Optimized disparity computation by fine-tuning SGBM parameters and applying filtering techniques, reducing noise and enhancing 3D reconstruction quality.",
    "projects.p11.d3": "Generated and exported point clouds in PLY format, enabling seamless visualization and analysis in 3D modeling applications.",
    "projects.p12.title": "Defect Detection in Prints Using U-Net",
    "projects.p12.info": "Implemented a U-Net model for defect detection, achieving 95% precision and reducing manual inspection time by 50%.",
    "projects.p12.d1": "Implemented a U-Net-based model for defect detection, achieving 95% precision in quality assurance.",
    "projects.p12.d2": "Built an AI pipeline processing 1000+ images per day, enhancing data throughput by 25%.",
    "projects.p12.d3": "Automated defect detection reporting, delivering real-time insights to quality control teams.",
    "projects.p13.title": "Predictive Maintenance Using XGBoost",
    "projects.p13.info": "Built a predictive maintenance model using XGBoost, achieving high accuracy in failure prediction for industrial systems.",
    "projects.p13.d1": "Developed an end-to-end predictive maintenance model leveraging XGBoost for industrial failure prediction.",
    "projects.p13.d2": "Achieved 98% accuracy by tuning model hyperparameters and implementing advanced analytics.",
    "projects.p13.d3": "Automated reporting and insights generation, enhancing operational efficiency.",
    "projects.p14.title": "Reinforcement Learning for RRR Robot",
    "projects.p14.info": "Implemented a RL model for end effector path planning, optimizing robot arm trajectories in a 3D environment.",
    "projects.p14.d1": "Developed and implemented RL-based trajectory optimization in MATLAB, improving end-effector accuracy by 30% in reaching target positions.",
    "projects.p14.d2": "Trained the robot over 1,000 episodes using reward-based learning, reducing path deviation by 25% and ensuring efficient motion planning.",
    "projects.p14.d3": "Simulated and validated RL policies in MATLAB, achieving an 85% success rate in autonomously selecting optimal paths for task execution.",
    "projects.p15.title": "ECG Signal Classification with AI",
    "projects.p15.info": "Developed a deep learning model for classifying ECG signals, achieving 99% accuracy in detecting cardiac anomalies.",
    "projects.p15.d1": "Developed a deep learning model in Python for ECG signal classification, achieving 99% accuracy in detecting abnormal heart rhythms.",
    "projects.p15.d2": "Preprocessed and segmented raw ECG data, improving model training efficiency by 40% through feature extraction and noise reduction.",
    "projects.p15.d3": "Optimized model inference speed, reducing prediction time by 30%, enabling real-time arrhythmia detection for potential clinical applications.",
    "experience.tech.thesis": "Tech: PyTorch (stereo CNN + cost volume), Unreal Engine 5 (synthetic data), NumPy, Matplotlib, ONNX Runtime",
    "experience.tech.indpro": "Tech: ABB AC800M PLC, PLC Programming, HMI (SCADA), Industrial Automation"
  },
  "de": {
    "nav.about": "Über mich",
    "nav.skills": "Fähigkeiten",
    "nav.experience": "Erfahrung",
    "nav.projects": "Projekte",
    "nav.contact": "Kontakt",
    "profile.hello": "Hallo, ich bin",
    "buttons.download_cv": "Lebenslauf herunterladen",
    "buttons.contact_info": "Kontakt",
    "about.subtitle": "Lerne mich besser kennen",
    "about.title": "Über mich",
    "skills.subtitle": "Entdecke meine",
    "skills.title": "Fähigkeiten",
    "skills.level.advanced": "Erfahren",
    "skills.level.intermediate": "Fortgeschritten",
    "experience.subtitle": "Meine aktuellen Stationen",
    "experience.title": "Erfahrung",
    "experience.role.01": "AI Research Praktikant",
    "experience.role.02": "Masterarbeit – Researcher",
    "projects.subtitle": "Meine aktuellen Projekte",
    "projects.title": "Projekte",
    "buttons.view_more": "Mehr Projekte anzeigen",
    "buttons.show_less": "Weniger anzeigen",
    "buttons.more_details": "Mehr Details",
    "buttons.less_details": "Weniger Details",
    "buttons.github": "GitHub",
    "buttons.live_demo": "Live-Demo",
    "languages.subtitle": "Weitere Fähigkeiten",
    "languages.title": "Sprachkenntnisse",
    "contact.subtitle": "Schreib mir",
    "contact.title": "Kontakt",
    "contact.name": "Name",
    "contact.email": "E‑Mail",
    "contact.subject": "Betreff",
    "contact.message": "Nachricht",
    "contact.send": "Nachricht senden",
    "contact.name_ph": "Dein Name",
    "contact.email_ph": "du@beispiel.de",
    "contact.subject_ph": "Betreff",
    "contact.message_ph": "Deine Nachricht",
    "feedback.success": "Nachricht erfolgreich gesendet!",
    "feedback.invalid": "Bitte alle Felder korrekt ausfüllen.",
    "feedback.fail": "Senden fehlgeschlagen. Bitte erneut versuchen.",
    "typingTexts": [
      "AI‑Ingenieur",
      "Computer‑Vision‑Ingenieur",
      "Machine‑Learning‑Ingenieur",
      "Deep‑Learning‑Ingenieur"
    ],
    "experience.bullet.01": "Beitrag zu AHEAD (Adaptive Headlights for Enhanced Environment Perception) zur Schließung von Wahrnehmungslücken bei Nacht für das automatisierte Fahren.",
    "experience.bullet.02": "Feinabstimmung von YOLOv8 auf Stereo-Nachtdaten mit beleuchtungsspezifischen Erweiterungen; mAP verbesserte sich von ~60 % auf ~90 %.",
    "experience.bullet.03": "Kalibrierte Stereo-Rigs und erstellte 2D→3D-Pipelines (Homographie, Triangulation), um Erkennungen im Fahrzeugrahmen zu verankern.",
    "experience.bullet.04": "Exportierte Detektoren nach ONNX und lieferte Echtzeit-Inferenz auf eingebetteter ADAS-Hardware über ONNX Runtime.",
    "experience.bullet.05": "Unterstützte Validierung und Benchmarking anhand interner ADAS-Sicherheitsprotokolle vor den Tests auf der Straße.",
    "experience.bullet.06": "Entwicklung eines leichtgewichtigen Stereo-CNN unter Verwendung von Autoencoder und Cost-Volume-Fusion für die Tiefenschätzung bei Nacht.",
    "experience.bullet.07": "Erreichung eines mittleren absoluten Fehlers von ~3 % und einer 3D-Lokalisierungsgenauigkeit von ~95 % im Bereich von 10–30 m.",
    "experience.bullet.08": "Erstellung von über 9.000 synthetischen Stereopaare mit Unreal Engine 5; automatisierte Datengenerierungspipeline reduzierte manuelles Labeling um 90 %.",
    "experience.bullet.09": "Fusion von Objekterkennung (YOLOv8) mit Disparitätsschätzung für genaue 3D-Begrenzungsrahmen.",
    "experience.bullet.10": "Unterstützung der Algorithmusvalidierung und des Benchmarkings in Übereinstimmung mit ADAS-Sicherheitsprotokollen.",
    "about.blurb": "Ich bin Vedant Sanjay Chavan – ein leidenschaftlicher KI-Ingenieur mit Fachkenntnissen in den Bereichen maschinelles Lernen, Deep Learning, Computer Vision und generative KI. Mit praktischer Erfahrung bei der HELLA GmbH & Co. und einem soliden akademischen Hintergrund (M.Eng. in Mechatronik und B.Tech. in Maschinenbau) verbinde ich Kreativität mit technischer Exzellenz, um komplexe Daten in praktische Lösungen umzuwandeln.",
    "about.stat.years": "2+ Jahre",
    "about.stat.years_desc": "Erfahrung in der Entwicklung von KI‑Lösungen",
    "about.stat.meng_field": "Mechatronik",
    "about.stat.btech_field": "Maschinenbau",
    "aria.linkedin": "LinkedIn‑Profil",
    "aria.github": "GitHub‑Profil",
    "experience.indpro.role": "Automatisierungsingenieur",
    "experience.indpro.b1": "Entwicklung und Implementierung einer SPS-Steuerungslogik (ABB AC800M) für Automatisierungssysteme in der Zuckerindustrie.",
    "experience.indpro.b2": "Entwurf von HMI-Dashboards und Unterstützung bei der Inbetriebnahme und Fehlerbehebung vor Ort in mehreren Anlagen.",
    "projects.p1.title": "Kundenspezifisches YOLO für robotergestütztes Bin Picking",
    "projects.p1.info": "Entwicklung eines benutzerdefinierten YOLO-Modells zur Erkennung von Objekten bei Bin-Picking-Aufgaben, das eine Genauigkeit von 95 % bei der Orientierungserkennung erreicht.",
    "projects.p1.d1": "Entwicklung eines TensorFlow-basierten YOLO-Modells für präzise Objekterkennung und Orientierungsschätzung.",
    "projects.p1.d2": "Das Modell wurde anhand synthetischer (Blender) und realer Datensätze trainiert und erreicht eine Genauigkeit von 95 %.",
    "projects.p1.d3": "Das Modell wurde optimiert, um die KI-Leistung unter industriellen Bedingungen zu verbessern und eine zuverlässige Automatisierung zu gewährleisten.",
    "projects.p2.title": "Tiefenstereosehen für nächtliche Fahrsituationen",
    "projects.p2.info": "Entwicklung eines CNN-basierten Tiefenschätzungsmodells mit PyTorch, das in Situationen mit schlechten Lichtverhältnissen eine Genauigkeit von 90 % erreicht.",
    "projects.p2.d1": "Entwicklung eines CNN-basierten Tiefenschätzungsmodells mit PyTorch für Szenarien mit schlechten Lichtverhältnissen.",
    "projects.p2.d2": "Erstellung synthetischer Trainingsdatensätze mit Unreal Engine 5 zur Verbesserung der Modellgeneralisierung.",
    "projects.p2.d3": "Erreichung einer Genauigkeit von 90 % bei der Tiefenschätzung, was herkömmliche KI-Methoden im Automobilbereich übertrifft.",
    "projects.p3.title": "3D‑Rekonstruktion mit Gaussian Splatting",
    "projects.p3.info": "Monokulare Smartphone-Videos wurden mithilfe der COLMAP-Vorverarbeitung und Gaussian Splatting-Rendering in eine dichte 3D-Szene umgewandelt.",
    "projects.p3.d1": "Mit COLMAP wurden Kamerapositionen und spärliche Punktwolken aus monokularen Eingabevideos extrahiert.",
    "projects.p3.d2": "Mit Gaussian Splatting wurden fotorealistische 3D-Ansichten mit Transparenz- und Schattierungseffekten gerendert.",
    "projects.p3.d3": "Die Ergebnisse wurden in Open3D visualisiert und untersucht, und es wurden Workflows für die Mesh-Konvertierung untersucht.",
    "projects.p3.d4": "Es wurden Beleuchtung, Okklusion und Splat-Shader für das hochauflösende Rendern komplexer Innenräume verarbeitet.",
    "projects.p4.title": "Objektinstanz-Segmentierung mit FastAPI und AWS",
    "projects.p4.info": "YOLOv11-Instanzsegmentierung, bereitgestellt über FastAPI, containerisiert mit Docker auf AWS EC2/ECR und automatisiert mit GitHub Actions CI/CD.",
    "projects.p4.d1": "Echtzeit-Objekterkennung und -Segmentierung: Verwendet YOLOv11 für eine genaue Instanzsegmentierung.",
    "projects.p4.d2": "FastAPI-Backend: Stellt die Modellvorhersagen über die REST-API bereit.",
    "projects.p4.d3": "Benutzerfreundliche Weboberfläche: Ermöglicht Benutzern das Hochladen von Bildern und das Anzeigen erkannter Objekte.",
    "projects.p4.d4": "Dockerisiert und cloudbasiert: Mit Docker containerisiert, an AWS ECR übertragen und auf AWS EC2 bereitgestellt.",
    "projects.p4.d5": "Automatisierte CI/CD-Pipeline: Verwendet GitHub Actions für die kontinuierliche Bereitstellung.",
    "projects.p5.title": "PaDiM-basierte Anomalieerkennung",
    "projects.p5.info": "Entwicklung eines leichtgewichtigen Systems zur Erkennung visueller Anomalien unter Verwendung von PaDiM und ONNX für die industrielle Fehlererkennung.",
    "projects.p5.d1": "Aus MobileNetV3 wurden mehrstufige Merkmale extrahiert und auf Pixelebene Mahalanobis-basierte Anomaliewerte berechnet.",
    "projects.p5.d2": "Der Merkmalsextraktor wurde nach ONNX exportiert und die Inferenz wurde mit ONNX Runtime durchgeführt, um plattformübergreifende Kompatibilität zu gewährleisten.",
    "projects.p5.d3": "Anomalien wurden mit Heatmaps und binären Masken unter Verwendung von Bildern aus dem MVTec AD-Datensatz visualisiert.",
    "projects.p6.title": "U-Net für die Segmentierung biologischer Bilder",
    "projects.p6.info": "Ein U-Net-Modell wurde anhand von Fluoreszenzmikroskopie-Bildern trainiert, um Kernstrukturen mit hoher Genauigkeit zu segmentieren.",
    "projects.p6.d1": "Instanzmasken wurden mithilfe von CLAHE und Gaußscher Unschärfe in binäre Labels zerlegt und vorverarbeitet.",
    "projects.p6.d2": "Ein leichtgewichtiges U-Net wurde in PyTorch erstellt und 100 Epochen lang auf einem Datensatz zur Kernsegmentierung trainiert.",
    "projects.p6.d3": "Auf dem Validierungssatz wurden ein Dice-Score von 0,89 und ein IoU von 0,82 erzielt.",
    "projects.p6.d4": "Die vorhergesagten Masken wurden visualisiert und ein inferenzfähiges Modell mithilfe von Colab erstellt.",
    "projects.p7.title": "Konversationsfähiger KI-Chatbot mit RAG und LLM-Feinabstimmung",
    "projects.p7.info": "Entwicklung eines GPT-basierten dialogorientierten KI-Assistenten, Integration der FAISS-Vektorsuche und Bereitstellung mithilfe von Docker und Hugging Face Spaces.",
    "projects.p8.title": "GaugeVision",
    "projects.p8.info": "Das Ziel ist es, die Überwachung und Kennzeichnung von Messgeräten durch den Einsatz des YOLOv11-Posenmodells und des QR-Detektors zu vereinfachen.",
    "projects.p8.d1": "Ein benutzerdefiniertes YOLOv11-Posenmodell wurde trainiert, um Schlüsselpunkte auf analogen Manometern zu erkennen.",
    "projects.p8.d2": "Der QR-Code-Detektor von OpenCV wurde integriert, um Identifikationsetiketten auf oder in der Nähe von Manometern zu lesen.",
    "projects.p8.d3": "Beide Ausgaben wurden visuell kombiniert, um die Richtung der Nadel und die QR-Daten in einer intuitiven Anzeige darzustellen.",
    "projects.p9.title": "Kantendetektor-GUI (Qt + OpenCV + C++)",
    "projects.p9.info": "Entwickelte eine interaktive Desktop-Anwendung mit Qt und OpenCV zur Visualisierung der Sobel- und Canny-Kantenerkennung mit Echtzeit-Schwellenwert-Schiebereglern.",
    "projects.p9.d1": "Integrierte OpenCV mit Qt, um Echtzeit-Bildverarbeitung mit Sobel- und Canny-Filtern zu ermöglichen.",
    "projects.p9.d2": "Dynamische Benutzeroberfläche mit Schiebereglern und Dropdown-Menüs für die Live-Schwellenwertanpassung und Filterauswahl hinzugefügt.",
    "projects.p9.d3": "Saubere modulare C++-Logik mit CMake für plattformübergreifende Build-Kompatibilität entwickelt.",
    "projects.p10.title": "BLIP-1-Optimierung für effiziente Bildbeschriftung",
    "projects.p10.info": "Optimierte BLIP-1-Bildbeschriftung auf der CPU durch dynamische Quantisierung und Pruning, wodurch eine 1,42-fache Beschleunigung ohne Genauigkeitsverlust erreicht wird.",
    "projects.p10.d1": "Baseline BLIP-1 CPU-Inferenz in 0,69 s für korrekte Bildunterschriften.",
    "projects.p10.d2": "Anwendung dynamischer Quantisierung auf alle linearen Schichten, wodurch die Latenz auf 0,48 s reduziert wurde.",
    "projects.p10.d3": "Kombination aus 30 % L1-Pruning und Quantisierung für eine 1,40-fache Beschleunigung.",
    "projects.p10.d4": "Beibehaltung der Bildunterschriftenqualität („ein Mann und sein Hund“) über alle Varianten hinweg.",
    "projects.p11.title": "Stereo-Punktwolkenrekonstruktion",
    "projects.p11.info": "Entwicklung einer Stereo-Vision-Pipeline für die 3D-Punktwolkenrekonstruktion, um mithilfe von SGBM und Filterung dichte 3D-Modelle zu erstellen.",
    "projects.p11.d1": "Entwicklung einer robusten Stereo-Vision-Pipeline unter Verwendung von OpenCV zur Berechnung von Disparitätskarten und zur Rekonstruktion von 3D-Punktwolken aus Stereobildern, wodurch die Genauigkeit der Tiefenschätzung verbessert wurde.",
    "projects.p11.d2": "Optimierung der Disparitätsberechnung durch Feinabstimmung der SGBM-Parameter und Anwendung von Filtertechniken, wodurch Rauschen reduziert und die Qualität der 3D-Rekonstruktion verbessert wurde.",
    "projects.p11.d3": "Erzeugung und Export von Punktwolken im PLY-Format, wodurch eine nahtlose Visualisierung und Analyse in 3D-Modellierungsanwendungen ermöglicht wurde.",
    "projects.p12.title": "Fehlererkennung in Drucken mithilfe von U-Net",
    "projects.p12.info": "Ein U-Net-Modell zur Fehlererkennung wurde implementiert, wodurch eine Genauigkeit von 95 % erreicht und die manuelle Inspektionszeit um 50 % reduziert werden konnte.",
    "projects.p12.d1": "Implementierung eines U-Net-basierten Modells zur Fehlererkennung, das eine Genauigkeit von 95 % in der Qualitätssicherung erreicht.",
    "projects.p12.d2": "Aufbau einer KI-Pipeline, die täglich mehr als 1000 Bilder verarbeitet und den Datendurchsatz um 25 % steigert.",
    "projects.p12.d3": "Automatisierte Fehlererkennungsberichte, die den Qualitätskontrollteams Echtzeit-Einblicke liefern.",
    "projects.p13.title": "Vorausschauende Wartung mit XGBoost",
    "projects.p13.info": "Ein prädiktives Wartungsmodell unter Verwendung von XGBoost erstellt, das eine hohe Genauigkeit bei der Ausfallvorhersage für industrielle Systeme erzielt.",
    "projects.p13.d1": "Entwicklung eines End-to-End-Modells für die vorausschauende Wartung unter Verwendung von XGBoost zur Vorhersage von Ausfällen in der Industrie.",
    "projects.p13.d2": "Erreichung einer Genauigkeit von 98 % durch Optimierung der Modell-Hyperparameter und Implementierung fortschrittlicher Analysen.",
    "projects.p13.d3": "Automatisierte Berichterstellung und Generierung von Erkenntnissen zur Steigerung der betrieblichen Effizienz.",
    "projects.p14.title": "Verstärkendes Lernen für den RRR-Roboter",
    "projects.p14.info": "Implementierung eines RL-Modells für die Endeffektor-Bahnplanung zur Optimierung der Roboterarm-Bahnen in einer 3D-Umgebung.",
    "projects.p14.d1": "Entwicklung und Implementierung einer RL-basierten Trajektorienoptimierung in MATLAB, wodurch die Genauigkeit des Endeffektors beim Erreichen der Zielpositionen um 30 % verbessert wurde.",
    "projects.p14.d2": "Training des Roboters in über 1.000 Episoden mithilfe von belohnungsbasiertem Lernen, wodurch die Pfadabweichung um 25 % reduziert und eine effiziente Bewegungsplanung sichergestellt wurde.",
    "projects.p14.d3": "Simulation und Validierung von RL-Richtlinien in MATLAB, wodurch eine Erfolgsquote von 85 % bei der autonomen Auswahl optimaler Pfade für die Aufgabenausführung erreicht wurde.",
    "projects.p15.title": "EKG-Signalklassifizierung mit KI",
    "projects.p15.info": "Entwicklung eines Deep-Learning-Modells zur Klassifizierung von EKG-Signalen, das eine Genauigkeit von 99 % bei der Erkennung von Herzanomalien erreicht.",
    "projects.p15.d1": "Entwicklung eines Deep-Learning-Modells in Python zur Klassifizierung von EKG-Signalen, das eine Genauigkeit von 99 % bei der Erkennung abnormaler Herzrhythmen erreicht.",
    "projects.p15.d2": "Vorverarbeitung und Segmentierung von rohen EKG-Daten, wodurch die Effizienz des Modelltrainings durch Merkmalsextraktion und Rauschunterdrückung um 40 % verbessert wurde.",
    "projects.p15.d3": "Optimierung der Modellinferenzgeschwindigkeit, wodurch die Vorhersagezeit um 30 % reduziert wurde und eine Echtzeit-Arrhythmieerkennung für potenzielle klinische Anwendungen ermöglicht wurde.",
    "experience.tech.thesis": "Tech: PyTorch (Stereo-CNN + Cost Volume), Unreal Engine 5 (synthetische Daten), NumPy, Matplotlib, ONNX Runtime",
    "experience.tech.indpro": "Tech: ABB AC800M PLC, SPS-Programmierung, HMI (SCADA), Industrieautomatisierung"
  }
};

  function applyTranslations(lang) {
    const dict = I18N[lang] || I18N.en;
    // Element text translations
    document.querySelectorAll("[data-i18n]").forEach(el => {
      const key = el.getAttribute("data-i18n");
      if (key && dict[key] !== undefined) {
        el.innerHTML = dict[key];
      }
    });
    // Attribute translations e.g., placeholder
    document.querySelectorAll("[data-i18n-attr]").forEach(el => {
      const spec = el.getAttribute("data-i18n-attr"); // format: "placeholder:key|title:key2"
      if (!spec) return;
      spec.split("|").forEach(pair => {
        const [attr, k] = pair.split(":");
        if (attr && k && dict[k] !== undefined) {
          el.setAttribute(attr.trim(), dict[k]);
        }
      });
    });

    // Update dynamic UI labels (More/Less details, View more)
    updateDynamicLabels(dict);
    // Update <html lang="...">
    document.documentElement.setAttribute("lang", lang);
    // Persist selection
    localStorage.setItem("lang", lang);
    // Sync both selects
    const d = document.getElementById("lang-select-desktop");
    const m = document.getElementById("lang-select-mobile");
    if (d) d.value = lang;
    if (m) m.value = lang;
  }

  function updateDynamicLabels(dict) {
    // More/Less buttons
    document.querySelectorAll(".project-btn.more-details-btn").forEach(btn => {
      const detailsId = btn.getAttribute("aria-controls");
      const details = detailsId ? document.getElementById(detailsId) : null;
      if (!details) return;
      const visible = details.classList.contains("details-visible");
      btn.textContent = visible ? (dict["buttons.less_details"] || "Less Details") : (dict["buttons.more_details"] || "More Details");
    });
    // View more projects button
    const viewBtn = document.querySelector(".view-more-btn");
    const container = document.getElementById("additional-projects");
    if (viewBtn && container) {
      const hidden = container.classList.contains("hidden");
      viewBtn.textContent = hidden ? (dict["buttons.view_more"] || "View More Projects") : (dict["buttons.show_less"] || "Show Less");
    }
    // Contact form submit button text
    const sendBtn = document.querySelector("#contact .submit-btn");
    if (sendBtn && dict["contact.send"]) {
      sendBtn.textContent = dict["contact.send"];
    }
  }

  function initLanguage() {
    let lang = localStorage.getItem("lang");
    if (!lang) {
      lang = (navigator.language || navigator.userLanguage || "en").toLowerCase().startsWith("de") ? "de" : "en";
    }
    // Attach listeners
    const d = document.getElementById("lang-select-desktop");
    const m = document.getElementById("lang-select-mobile");
    const handler = (e) => applyTranslations(e.target.value);
    if (d) d.addEventListener("change", handler);
    if (m) m.addEventListener("change", handler);
    // Initial apply
    applyTranslations(lang);
  }

  // --- Theme Toggle Functionality ---
  const desktopToggle = document.getElementById('theme-toggle-desktop');
  const mobileToggle = document.getElementById('theme-toggle-mobile');
  // Get the new span containers
  const desktopIconContainer = document.getElementById('theme-icon-desktop');
  const mobileIconContainer = document.getElementById('theme-icon-mobile');

  // Define your SVG icons as strings
  const sunIconSVG = `
    <svg class="theme-icon light-mode-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <circle cx="12" cy="12" r="5"></circle>
        <line x1="12" y1="1" x2="12" y2="3"></line>
        <line x1="12" y1="21" x2="12" y2="23"></line>
        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
        <line x1="1" y1="12" x2="3" y2="12"></line>
        <line x1="21" y1="12" x2="23" y2="12"></line>
        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
    </svg>`;

  const moonIconSVG = `
    <svg class="theme-icon dark-mode-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
    </svg>`;

  const userPrefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  let currentTheme = localStorage.getItem('theme');

  if (!currentTheme) {
    currentTheme = userPrefersDark ? 'dark' : 'light';
  }

  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    const isDark = theme === 'dark';

    if (desktopToggle) desktopToggle.checked = isDark;
    if (mobileToggle) mobileToggle.checked = isDark;

    const currentIconSVG = isDark ? moonIconSVG : sunIconSVG;

    if (desktopIconContainer) {
      desktopIconContainer.innerHTML = currentIconSVG;
    }
    if (mobileIconContainer) {
      mobileIconContainer.innerHTML = currentIconSVG;
    }
  }

  applyTheme(currentTheme);

  // Initialize language/i18n
  initLanguage();

  function handleToggleChange(event) {
    const newTheme = event.target.checked ? 'dark' : 'light';
    applyTheme(newTheme);
    localStorage.setItem('theme-manual-override', 'true');
  }

  if (desktopToggle) {
    desktopToggle.addEventListener('change', handleToggleChange);
  }
  if (mobileToggle) {
    mobileToggle.addEventListener('change', handleToggleChange);
  }

  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
    if (!localStorage.getItem('theme-manual-override')) {
      applyTheme(e.matches ? 'dark' : 'light');
    }
  });
  // --- Typing Animation (Profile Section) ---
  const typingAnimationElement = document.getElementById('typing-animation');
  if (typingAnimationElement) {
    let typingTexts = (I18N[localStorage.getItem('lang') || 'en'].typingTexts || ['AI Engineer','Computer Vision Engineer','Machine Learning Engineer','Deep Learning Engineer']);
    let textIndex = 0;
    let charIndex = 0;
    function type() {
      if (charIndex < typingTexts[textIndex].length) {
        typingAnimationElement.textContent += typingTexts[textIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, 150);
      } else {
        setTimeout(erase, 1500);
      }
    }
    function erase() {
      if (charIndex > 0) {
        typingAnimationElement.textContent = typingTexts[textIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, 100);
      } else {
        textIndex = (textIndex + 1) % typingTexts.length;
        setTimeout(type, 500);
      }
    }
    setTimeout(type, 500);
  }

  // --- Skills Accordion ---
  const skillCards = document.querySelectorAll('#skills .skill-card');
  skillCards.forEach(card => {
    const header = card.querySelector('.card-header');
    const content = card.querySelector('.card-content');
    if (header && content) {
      header.addEventListener('click', () => {
        const isExpanded = card.classList.contains('expanded');
        skillCards.forEach(otherCard => {
          if (otherCard !== card && otherCard.classList.contains('expanded')) {
            otherCard.classList.remove('expanded');
            otherCard.querySelector('.card-content').style.maxHeight = null;
          }
        });
        if (isExpanded) {
          card.classList.remove('expanded');
          content.style.maxHeight = null;
        } else {
          card.classList.add('expanded');
          content.style.maxHeight = content.scrollHeight + "px";
        }
      });
    }
  });

  // --- Project "More Details" Toggle (Updated with Animation & ARIA) ---
  const detailButtons = document.querySelectorAll(".project-btn.more-details-btn");

  detailButtons.forEach(button => {
    const projectCard = button.closest(".project-card");
    if (!projectCard) return;

    const detailsId = button.getAttribute('aria-controls');
    const details = detailsId ? document.getElementById(detailsId) : null;
    const projectInfo = projectCard.querySelector(".project-info");

    if (details && projectInfo) {
      const isInitiallyHidden = details.classList.contains('hidden') || !details.classList.contains('details-visible');
      button.setAttribute('aria-expanded', isInitiallyHidden ? 'false' : 'true');
      details.setAttribute('aria-hidden', isInitiallyHidden ? 'true' : 'false');

      if (!isInitiallyHidden) {
        details.style.maxHeight = details.scrollHeight + "px";
        projectInfo.classList.add('project-info-hidden'); // Hide info if details are initially visible
      } else {
        projectInfo.classList.remove('project-info-hidden');
      }
    }
  });

  detailButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const projectCard = this.closest(".project-card");
      if (!projectCard) return;

      const detailsId = this.getAttribute('aria-controls');
      if (!detailsId) {
        console.warn("More Details button is missing aria-controls attribute or its value is empty.");
        return;
      }
      const details = document.getElementById(detailsId);
      const projectInfo = projectCard.querySelector(".project-info");

      if (!details || !projectInfo) {
        console.warn(`Required elements (.project-details or .project-info) not found for card controlled by button for ID: ${detailsId}`);
        return;
      }

      const isCurrentlyVisible = details.classList.contains('details-visible');

      // Close all other open project details and restore their project-info
      document.querySelectorAll(".project-details.details-visible").forEach((detailEl) => {
        if (detailEl !== details) {
          const otherProjectCard = detailEl.closest('.project-card');
          if (otherProjectCard) {
            const otherProjectInfo = otherProjectCard.querySelector('.project-info');
            if (otherProjectInfo) {
              otherProjectInfo.classList.remove('project-info-hidden');
            }
            const otherButtonId = detailEl.id;
            const otherButton = document.querySelector(`.project-btn.more-details-btn[aria-controls="${otherButtonId}"]`);
            if (otherButton) {
              otherButton.textContent = (I18N[localStorage.getItem("lang") || "en"]["buttons.more_details"] || "More Details");
              otherButton.setAttribute('aria-expanded', 'false');
            }
          }
          detailEl.classList.remove('details-visible');
          detailEl.style.maxHeight = null;
          detailEl.setAttribute('aria-hidden', 'true');
        }
      });

      // Toggle the clicked project's details and project-info
      if (isCurrentlyVisible) {
        details.classList.remove('details-visible');
        details.style.maxHeight = null;
        this.textContent = (I18N[localStorage.getItem("lang") || "en"]["buttons.more_details"] || "More Details");
        this.setAttribute('aria-expanded', 'false');
        details.setAttribute('aria-hidden', 'true');
        projectInfo.classList.remove('project-info-hidden'); // Show project-info
      } else {
        details.classList.remove('hidden');
        details.classList.add('details-visible');
        details.style.maxHeight = details.scrollHeight + "px";
        this.textContent = (I18N[localStorage.getItem("lang") || "en"]["buttons.less_details"] || "Less Details");
        this.setAttribute('aria-expanded', 'true');
        details.setAttribute('aria-hidden', 'false');
        projectInfo.classList.add('project-info-hidden'); // Hide project-info
      }
    });
  });

  // --- "View More Projects" Toggle ---
  const viewMoreProjectsBtn = document.querySelector(".view-more-btn");
  const additionalProjectsContainer = document.getElementById('additional-projects');
  if (viewMoreProjectsBtn && additionalProjectsContainer) {
    const isInitiallyHidden = additionalProjectsContainer.classList.contains('hidden');
    viewMoreProjectsBtn.textContent = isInitiallyHidden ? (I18N[localStorage.getItem('lang') || 'en']["buttons.view_more"] || 'View More Projects') : (I18N[localStorage.getItem('lang') || 'en']["buttons.show_less"] || 'Show Less');

    viewMoreProjectsBtn.addEventListener("click", () => {
      additionalProjectsContainer.classList.toggle('hidden');
      if (additionalProjectsContainer.classList.contains('hidden')) {
        viewMoreProjectsBtn.textContent = (I18N[localStorage.getItem('lang') || 'en']["buttons.view_more"] || 'View More Projects');
      } else {
        viewMoreProjectsBtn.textContent = (I18N[localStorage.getItem('lang') || 'en']["buttons.show_less"] || 'Show Less');
      }
    });
  }

  // --- Contact Form with EmailJS ---
  const contactForm = document.getElementById('contact-form');
  const feedbackMessage = document.getElementById('contact-feedback');
  if (contactForm && feedbackMessage) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = contactForm.querySelector('[name="user_name"]');
      const subject = contactForm.querySelector('[name="subject"]');
      const email = contactForm.querySelector('[name="user_email"]');
      const message = contactForm.querySelector('[name="message"]');
      let isValid = true;
      const nameVal = name ? name.value.trim() : "";
      const emailEl = contactForm.querySelector('[name="user_email"]');
      const emailVal = emailEl ? emailEl.value.trim() : "";
      const subjectVal = subject ? subject.value.trim() : "";
      const messageVal = message ? message.value.trim() : "";
      const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailVal);
      if (!nameVal || !emailOk || !subjectVal || !messageVal) {
        isValid = false;
      }
      if (!isValid) {
        const txt = (typeof I18N !== "undefined" && I18N && I18N[(localStorage.getItem("lang")||"en")] && I18N[(localStorage.getItem("lang")||"en")]["feedback.invalid"]) || "Please fill all fields correctly.";
        feedbackMessage.textContent = txt;
        feedbackMessage.style.color = "red";
        feedbackMessage.style.display = 'block';
        setTimeout(() => { feedbackMessage.style.display = 'none'; feedbackMessage.textContent = ""; }, 3000);
        return;
      }
      if (typeof emailjs !== 'undefined') {
        (function(){
            const btn = contactForm.querySelector('.submit-btn');
            const prevText = btn ? btn.textContent : null;
            if (btn) { btn.disabled = true; btn.textContent = 'Sending...'; }
            return emailjs.sendForm('service_fcwnhwo', 'template_tqz2zlq', contactForm)
              .then(() => {
                const okTxt = (typeof I18N !== "undefined" && I18N && I18N[(localStorage.getItem("lang")||"en")] && I18N[(localStorage.getItem("lang")||"en")]["feedback.success"]) || "Message sent — thank you!";
                feedbackMessage.textContent = okTxt;
                feedbackMessage.style.color = "var(--success-feedback-color)";
                feedbackMessage.style.display = 'block';
                contactForm.reset();
                setTimeout(() => { feedbackMessage.style.display = 'none'; feedbackMessage.textContent = ""; }, 3000);
              })
              .catch((error) => {
                console.error('EmailJS Error:', error);
                const failTxt = (typeof I18N !== "undefined" && I18N && I18N[(localStorage.getItem("lang")||"en")] && I18N[(localStorage.getItem("lang")||"en")]["feedback.fail"]) || "Failed to send message. Please try again.";
                feedbackMessage.textContent = failTxt;
                feedbackMessage.style.color = 'red';
                feedbackMessage.style.display = 'block';
                setTimeout(() => { feedbackMessage.style.display = 'none'; feedbackMessage.textContent = ""; }, 3000);
              })
              .finally(() => {
                if (btn) { btn.disabled = false; btn.textContent = prevText || 'Send Message'; }
              });
          })()
          .then((result) => {
            feedbackMessage.textContent = I18N[localStorage.getItem("lang") || "en"]["feedback.success"] || "Message sent — thank you!";
            feedbackMessage.style.color = "var(--success-feedback-color)";
            feedbackMessage.style.display = 'block';
            contactForm.reset();
            setTimeout(() => { feedbackMessage.style.display = 'none'; feedbackMessage.textContent = ""; }, 3000);
          }, (error) => {
            feedbackMessage.textContent = I18N[localStorage.getItem("lang") || "en"]["feedback.fail"] || "Failed to send message. Please try again.";
            feedbackMessage.style.color = "red";
            feedbackMessage.style.display = 'block';
            console.error("EmailJS Error:", error);
            setTimeout(() => { feedbackMessage.style.display = 'none'; feedbackMessage.textContent = ""; }, 3000);
          });
      } else {
        console.error("EmailJS library not found.");
        feedbackMessage.textContent = I18N[localStorage.getItem("lang") || "en"]["feedback.fail"] || "Email service is currently unavailable.";
        feedbackMessage.style.color = "red";
        feedbackMessage.style.display = 'block';
        setTimeout(() => { feedbackMessage.style.display = 'none'; feedbackMessage.textContent = ""; }, 3000);
      }
    });
  }

  /* SKILLS ACCORDION */
  document.querySelectorAll('.skills-accordion .skill-card').forEach(card => {
    const header = card.querySelector('.card-header');
    const content = card.querySelector('.card-content');
    const icon = card.querySelector('.toggle-icon');
    if (!header || !content) return;
    // collapse by default
    content.style.maxHeight = '0px';
    header.addEventListener('click', () => {
      const isOpen = card.classList.toggle('open');
      if (isOpen) {
        content.style.maxHeight = content.scrollHeight + 'px';
        if (icon) icon.classList.add('rotated');
      } else {
        content.style.maxHeight = '0px';
        if (icon) icon.classList.remove('rotated');
      }
    });
  });
});

const hamburgerMenuIcon = document.querySelector('.hamburger-icon');
if (hamburgerMenuIcon) {
    hamburgerMenuIcon.addEventListener('click', toggleMenu);
}


