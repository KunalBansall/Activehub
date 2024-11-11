export interface Member {
  id: string;
  name: string;
  email: string;
  phone: string;
  membershipType: 'basic' | 'premium' | 'platinum';
  joinDate: Date;
  expiryDate: Date;
  status: 'active' | 'expired' | 'pending';
  lastCheckIn?: Date;
  photo?: string;
}

export interface Attendance {
  id: string;
  memberId: string;
  checkIn: Date;
  checkOut?: Date;
}