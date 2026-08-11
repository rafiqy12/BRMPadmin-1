import { useState } from "react";
import AdminDashboardPage from "./AdminDashboardPage";
import LaboratoriumPage from "./LaboratoriumPage";
import PermohonanPage from "./PermohonanPage";
import AdminShell from "./components/AdminShell";

const aduanRows = [
    {
        no: 1,
        proses: "Selesai",
        kode: "53608401",
        nama: "dea",
        pekerjaan: "pegawai",
        tipe: "Perorangan",
        email: "dea@gmail.com",
        hp: "081297732826",
        tanggal: "20-07-2024 08:27",
        caraMemperoleh: "Mendapatkan salinan hardcopy",
        caraMendapatkan: "Pakai Kurir",
    },
    {
        no: 2,
        proses: "Selesai",
        kode: "607426615",
        nama: "Diah Sulistyorini",
        pekerjaan: "mahasiswa",
        tipe: "Perorangan",
        email: "dsy.nuriyanto@gmail.com",
        hp: "082323375252",
        tanggal: "28-06-25 09:09",
        caraMemperoleh: "Mendapatkan salinan hardcopy",
        caraMendapatkan: "Mengambil langsung",
    },
    {
        no: 3,
        proses: "Diproses",
        kode: "1970012002",
        nama: "COBA",
        pekerjaan: "MAHASISWA",
        tipe: "Instansi",
        email: "lobs1@fahungla.com",
        hp: "0874444-05-2025",
        tanggal: "27-05-25 04:45",
        caraMemperoleh: "Mendapatkan salinan hardcopy",
        caraMendapatkan: "Mengambil langsung",
    },
    {
        no: 4,
        proses: "Selesai",
        kode: "214404124",
        nama: "Andik Susatyo",
        pekerjaan: "Pengusaha",
        tipe: "Perorangan",
        email: "andik@gmail.com",
        hp: "081249286420",
        tanggal: "15-09-25 19:30",
        caraMemperoleh: "Mendapatkan salinan hardcopy",
        caraMendapatkan: "Pakai Kurir",
    },
];

export default function App() {
    const [activeView, setActiveView] = useState("dashboard");

    const isLaboratoriumView = activeView.startsWith("laboratorium");

    return (
        <AdminShell activeView={activeView} onNavigate={setActiveView}>
            {activeView === "permohonan" ? <PermohonanPage onNavigate={setActiveView} rows={aduanRows} /> : isLaboratoriumView ? <LaboratoriumPage activeTab={activeView} onNavigate={setActiveView} /> : <AdminDashboardPage />}
        </AdminShell>
    );
}
