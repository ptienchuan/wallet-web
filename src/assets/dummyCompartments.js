export default [
	{
		_id: '1',
		name: 'Chi phí sinh hoạt',
		buget: 9000000,
		plans: [
			{
				_id: '11',
				name: 'Đóng tiền phòng',
				cost: 2000000,
				spended: true,
			},
			{
				_id: '12',
				name: 'Đóng tiền điện',
				cost: 700000,
				spended: false,
			},
			{
				_id: '13',
				name: 'Đóng tiền mạng',
				cost: 100000,
				spended: true,
			},
			{
				_id: '14',
				name: 'Đóng tiền nước',
				cost: 150000,
				spended: false,
				note: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
			},
			{
				_id: '15',
				name: 'Đóng tiền giữ xe',
				cost: 50000,
				spended: true,
			},
			{
				_id: '16',
				name: 'Chi tiền ăn',
				cost: 6000000,
				spended: false,
			},
		]
	},
	{
		_id: '2',
		name: 'Chi phí cá nhân',
		buget: 1000000,
		plans: [
			{
				_id: '21',
				name: 'Đổ xăng',
				cost: 50000,
				spended: true,
			},
		]
	},
	{
		_id: '3',
		name: 'Đầu tư học',
		buget: 500000,
		plans: [
			{
				_id: '31',
				name: 'Mua khóa học React',
				cost: 350000,
				spended: false,
			},
		]
	},
	{
		_id: '4',
		name: 'Tiết kiệm',
		buget: 4500000,
		plans: [

		]
	},
]