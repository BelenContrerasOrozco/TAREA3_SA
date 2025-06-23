const { sequelize, ConfigurationItem, CIRelacion } = require('./models');

const runSeed = async () => {
  try {
    await sequelize.sync({ force: true }); // Borra y recrea tablas

    console.log('Insertando datos de prueba...');

    const servidor = await ConfigurationItem.create({
      nombre: 'Servidor1',
      tipo: 'Hardware',
      descripcion: 'Servidor de Aplicaciones',
      numero_serie: 'SN123456',
      version: 'v1.0',
      fecha_adquisicion: '2022-01-01',
      estado_actual: 'Activo',
      ubicacion_fisica: 'Sala de Servidores 1',
      propietario_responsable: 'Equipo de Infraestructura',
      fecha_cambio: '2022-02-01',
      descripcion_cambio: 'Actualización de Software',
      documentacion_relacionada: 'http://manual-servidor.com',
      enlaces_incidentes_problemas: 'http://incidente1.com',
      nivel_seguridad: 'Alto',
      cumplimiento: 'Cumple',
      estado_configuracion: 'Aprobado',
      numero_licencia: 'ABC123',
      fecha_vencimiento: '2023-01-01',
      ambiente: 'PROD'
    });

    const baseDatos = await ConfigurationItem.create({
      nombre: 'BaseDeDatos1',
      tipo: 'Base de Datos',
      descripcion: 'BD principal',
      version: '12.5',
      estado_actual: 'Activo',
      propietario_responsable: 'Equipo DBA',
      ambiente: 'PROD'
    });

    const app = await ConfigurationItem.create({
      nombre: 'AppWeb1',
      tipo: 'Software',
      descripcion: 'Aplicación Web Corporativa',
      version: '2.0.1',
      numero_licencia: 'XYZ987',
      estado_actual: 'Activo',
      ambiente: 'QA'
    });

    const backupServer = await ConfigurationItem.create({
      nombre: 'ServidorBackup',
      tipo: 'Hardware',
      descripcion: 'Servidor de Respaldo',
      numero_serie: 'SN654321',
      ubicacion_fisica: 'Sala de Respaldo',
      estado_actual: 'Inactivo',
      ambiente: 'DEV'
    });

    const dashboard = await ConfigurationItem.create({
      nombre: 'DashboardBI',
      tipo: 'Software',
      descripcion: 'Dashboard de BI',
      version: '1.3.4',
      estado_actual: 'Activo',
      ambiente: 'DEV'
    });

    // Relaciones entre CIs
    await CIRelacion.create({
      ci_origen_id: servidor.id,
      ci_destino_id: baseDatos.id,
      tipo_relacion: 'conecta con'
    });

    await CIRelacion.create({
      ci_origen_id: app.id,
      ci_destino_id: baseDatos.id,
      tipo_relacion: 'utiliza'
    });

    console.log('Datos de prueba insertados correctamente.');
    process.exit(0);
  } catch (error) {
    console.error('Error insertando datos:', error);
    process.exit(1);
  }
};

runSeed();
