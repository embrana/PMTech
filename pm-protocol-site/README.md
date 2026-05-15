# Protocolo PM | Cómo trabajo

Sitio estático para mostrar mi modalidad de trabajo PM. Convierte el material de `PMTech/` en una experiencia navegable sobre discovery, roadmap, scope, delivery, capacidad, comunicación, vendors, integraciones, riesgos, incidentes, North Star Metrics, Design Thinking y mejora continua.

## Plan de trabajo ejecutado

1. Inventariar documentos e imágenes fuente.
2. Definir arquitectura de información orientada a explicar cómo trabajo.
3. Construir sitio estático con narrativa operativa, playbooks, artefactos y evidencia.
4. Agregar funciones interactivas: tabs, backlog filtrable, búsqueda, galería ampliable, calculadora de capacidad, triage de riesgo e impresión/PDF.
5. Verificar render responsive en navegador local.

## Backlog desarrollado

- Hero con propuesta de valor y evidencia cuantificada.
- Principios de trabajo → protocolo operativo.
- Siete playbooks PM con fases, controles, outputs e imagen fuente.
- Flujo Business → Code para trazabilidad de decisiones.
- Sección North Star Metrics + Design Thinking para producto from scratch.
- Calculadora de capacidad neta con focus factor y buffer.
- Triage de riesgo de delivery.
- Plan 30/60/90 para entrada al rol.
- Backlog funcional filtrable y buscable.
- Kit de artefactos PM.
- Galería con 19 imágenes fuente.
- Ledger con los 9 documentos fuente.
- Resumen profesional en inglés.

## Uso local

Abrir `index.html` directamente o servir la carpeta desde el workspace con:

```bash
python3 -m http.server 8000
```

Luego abrir `http://localhost:8000/pm-protocol-site/`.
