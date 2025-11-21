import { useState } from 'react'
import StatsCards from '../components/StatsCards'
import BarberTable from '../components/BarberTable'
import ModalConfig from '../components/DashboardComponents/ModalConfig'
import EditBarber from '../components/DashboardComponents/EditBarber'

const earnTod = 25000
const custTod = 75

function Dashboard() {
	const [isModalOpen, setIsModalOpen] = useState(false)
	const [selectedBarberId, setSelectedBarberId] = useState(null)

	const handleOpenModal = (barberId) => {
		setSelectedBarberId(barberId)
		setIsModalOpen(true)
	}

	const handleCloseModal = () => {
		setIsModalOpen(false)
		setSelectedBarberId(null)
	}

	return (
		<>
			<div className="min-h-full  ">
				<main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
					<div className="">
						<StatsCards earnTod={earnTod} custTod={custTod} />
					</div>

					<div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
						<div className="mb-6">
							<h2 className="text-2xl font-bold text-slate-900">Barberos</h2>
							<p className="text-slate-600 mt-1">
								Gestiona y consulta el rendimiento de todos los barberos
							</p>
						</div>
						<BarberTable onEditBarber={handleOpenModal} />
					</div>
				</main>
				<ModalConfig isOpen={isModalOpen} onClose={handleCloseModal}>
					<EditBarber barberID={selectedBarberId} />
				</ModalConfig>
			</div>
		</>
	)
}

export default Dashboard
