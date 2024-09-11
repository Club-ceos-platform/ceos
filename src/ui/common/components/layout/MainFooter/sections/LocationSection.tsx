export function LocationSection() {
  return (
    <div className="bg-blue-900 text-white py-8 px-4">
      <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
        <i className="pi pi-map-marker" style={{ fontSize: "1.5rem" }}></i>
        <div className="flex flex-col gap-1">
          <h1 className="text-xl md:text-2xl font-bold">Adresse :</h1>
          <p className="text-gray-300 text-sm md:text-base">
            Club des CEOs, marque de DGofficehub, 9 rue des colonnes 75002 Paris
          </p>
        </div>
      </div>
    </div>
  );
}
