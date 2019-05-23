
  const workorders = [
    {
      id: 1,
      buildingNmb: 1,
      apartmentNmb: 1,
      selectDate: new Date(),
      completeDate: new Date(),
      sendDate: new Date(),
      user: 'Anastazija Veselinovic',
      status: 'sent'
    },
    {
      id: 2,
      buildingNmb: 2,
      apartmentNmb: 1,
      selectDate: new Date(),
      completeDate: new Date(),
      sendDate: new Date(),
      user: 'Stefan Djordjevic',
      status: 'sent'
    },
    {
      id: 3,
      buildingNmb: 1,
      apartmentNmb: 2,
      selectDate: new Date(),
      completeDate: new Date(),
      sendDate: new Date(),
      user: 'Anastazija Veselinovic',
      status: 'sent'
    },
    {
      id: 4,
      buildingNmb: 8,
      apartmentNmb: 1,
      selectDate: new Date(),
      completeDate: new Date(),
      sendDate: new Date(),
      user: 'Stefan Djordjevic',
      status: 'sent'
    },
    {id: 5,
      buildingNmb: 12,
      apartmentNmb: 3,
      selectDate: new Date(),
      completeDate: new Date(),
      sendDate: new Date(),
      user: 'Pakao',
      status: 'pending'
    },
    {id: 6,
      buildingNmb: 14,
      apartmentNmb: 3,
      selectDate: new Date(),
      completeDate: new Date(),
      sendDate: new Date(),
      user: 'Bice sranja',
      status: 'sent'
    },
    {id: 7,
      buildingNmb: 6,
      apartmentNmb: 6,
      selectDate: new Date(),
      completeDate: new Date(),
      sendDate: new Date(),
      user: 'Losa losa',
      status: 'pending'
    },
    {id: 8,
      buildingNmb: 8,
      apartmentNmb: 5,
      selectDate: new Date(),
      completeDate: new Date(),
      sendDate: new Date(),
      user: 'Bas jaka stvar',
      status: 'sent'
    },
    {id: 9,
      buildingNmb: 18,
      apartmentNmb: 11,
      selectDate: new Date(),
      completeDate: new Date(),
      sendDate: new Date(),
      user: 'Georgije',
      status: 'pending'
    }
  ];

  export default function  getAllWorkorders(){
    return workorders;
  }
