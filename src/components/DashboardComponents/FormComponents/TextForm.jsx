import { CircleAlert } from 'lucide-react'

function TextForm({ placeholder, label }) {
	return (
		<div>
			<label
				htmlFor="nombre"
				className="block tracking-widest text-sm font-medium text-white flex items-center justify-between"
			>
				{label} <CircleAlert className="text-red-600" />
			</label>

			<div
				className="
      mt-1 
      p-[3px]  
      rounded-xl 
      bg-gradient-to-br from-blue-400 to-blue-600  
      shadow-lg
    "
			>
				<input
					type="text"
					id="nombre"
					name="nombre"
					placeholder={placeholder}
					required
					className="
        block 
        w-full 
        p-2 
        bg-linear-to-br from-slate-900 via-slate-800 to-slate-900
        rounded-[10px]
        shadow-inner 
        text-white 
        focus:outline-none 
      "
				/>
			</div>
		</div>
	)
}

export default TextForm
