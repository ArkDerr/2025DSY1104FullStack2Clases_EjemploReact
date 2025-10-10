export default function BlogNoticias() {
  return (
    <div className="container py-4">
      <h1 className="mb-3">Blogs y Noticias</h1>

      {/* Wrapper responsivo (Bootstrap 5) */}
      <div className="ratio ratio-16x9">
        <iframe
          //src="https://www.duoc.cl/noticias/"
          //title="Duoc UC - Noticias"
          src="https://www.biobiochile.cl"
          title="BioBio"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          style={{ border: 0 }}
        />
      </div>

      <p className="text-muted mt-2">
        Si no ves el contenido, el sitio puede no permitir ser embebido por
        políticas de seguridad.
      </p>

      <a
        className="btn btn-primary"
        //href="https://www.duoc.cl/noticias/"
        href="https://www.biobiochile.cl"
        target="_blank"
        rel="noopener noreferrer"
      >
        Abrir en Noticias!!!!
      </a>
    </div>
  );
}
