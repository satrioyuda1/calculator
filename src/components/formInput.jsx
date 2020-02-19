import React from 'react';

const formInput = (props) => {
	return (
		<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
			<form>
				<label style={{ textAlign: 'center' }}>Nilai</label>
				<div
					style={{
						display: 'flex',
						flexDirection: 'column',
						width: '30%'
					}}>
					<div style={{ display: 'flex', marginBottom: '10px' }}>
						<label>
							<input name='nil1' value={props.nil1} onChange={props.change} disabled={!props.checked1} />
						</label>
						<label>
							<input
								id='checked1'
								name='nil1'
								checked={props.checked1}
								onChange={props.checked}
								type='checkbox'
							/>
						</label>
					</div>
					<div style={{ display: 'flex', marginBottom: '10px' }}>
						<input name='nil2' value={props.nil2} onChange={props.change} disabled={!props.checked2} />
						<input
							id='checked2'
							type='checkbox'
							name='nil2'
							checked={props.checked2}
							onChange={props.checked}
						/>
					</div>
					<div style={{ display: 'flex', marginBottom: '10px' }}>
						<input name='nil3' value={props.nil3} onChange={props.change} disabled={!props.checked3} />
						<input
							id='checked3'
							type='checkbox'
							name='nil3'
							checked={props.checked3}
							onChange={props.checked}
						/>
					</div>
				</div>
			</form>
		</div>
	);
};
export default formInput;
