// Reportes desde json (TEMPORAL)
const reports = [];

// Obtener reporte
const getReport = (req, res) => {
  const { id } = req.params;
  const report = reports.find((r) => r.id === parseInt(id));
  if (!report) {
    return res.status(404).json({ error: 'Report not found' });
  }
  return res.json(report);
};

// Obtener reportes
const getReports = (req, res) => {
  return res.json(reports);
};

// Crear reporte
const createReport = (req, res) => {
  const { title, description, location } = req.body;
  const newReport = {
    id: reports.length + 1,
    title,
    description,
    location,
    status: 'Pending',
    createdAt: new Date(),
  };
  reports.push(newReport);
  return res.status(201).json(newReport);
};

// Eliminar reporte
const deleteReport = (req, res) => {
  const { id } = req.params;
  const index = reports.findIndex((r) => r.id === parseInt(id));
  if (index === -1) {
    return res.status(404).json({ error: 'Report not found' });
  }
  reports.splice(index, 1);
  return res.json({ message: 'Report deleted successfully' });
};

module.exports = { getReport, getReports, createReport, deleteReport };
