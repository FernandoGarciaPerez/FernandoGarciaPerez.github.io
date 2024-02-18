import cv2
import pytesseract

# Configura la ruta de Tesseract en tu sistema
pytesseract.pytesseract.tesseract_cmd = r'C:\Program Files\Tesseract-OCR\tesseract.exe'  # Cambia esto según tu ruta

# Inicializa la captura de video
cap = cv2.VideoCapture(0)

while True:
    # Captura frame por frame
    ret, frame = cap.read()

    if not ret:
        break

    # Convertir a escala de grises para mejorar el OCR
    gray = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)

    # Aplicar OCR al frame
    text = pytesseract.image_to_string(gray)
    print(text)

    # Muestra el frame resultante
    cv2.imshow('Frame', gray)

    # Rompe el bucle si se presiona 'q'
    if cv2.waitKey(1) & 0xFF == ord('q'):
        break

# Cuando todo está hecho, libera la captura
cap.release()
cv2.destroyAllWindows()
