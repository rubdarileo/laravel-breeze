<?php

namespace Database\Seeders;

use App\Models\BaseHour;
use App\Models\Officer;
use App\Models\NoteType;
use App\Models\Ethnicity;
use Illuminate\Database\Seeder;
use App\Models\Position;
use App\Models\Reason;
use App\Models\InsurranceCompany;
use App\Models\Gender;
use App\Models\Status;
use App\Models\Certificate;
use App\Models\Title;
use App\Models\SickPlan;
use App\Models\Disability;
use App\Models\UnionMembershipStatus;
use App\Models\Station;

class PopulatingDatabaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $base           = BaseHour::create(['name' => '12']);
        $base           = BaseHour::create(['name' => '19']);
        $base           = BaseHour::create(['name' => '40']);

        $ethnicity      = Ethnicity::create(['name' => 'White']);
        $ethnicity      = Ethnicity::create(['name' => 'Black']);
        $ethnicity      = Ethnicity::create(['name' => 'Hispanic']);
        $ethnicity      = Ethnicity::create(['name' => 'Asian-Pacific']);
        $ethnicity      = Ethnicity::create(['name' => 'Indian']);

        $officer        = Officer::create(['name' => 'DERRIK RYAN','type' => 'President']);
        $officer        = Officer::create(['name' => 'JOHN BURNS','type' => 'Vice President']);
        $officer        = Officer::create(['name' => 'CHRIS BOLES','type' => 'Treasurer']);
        $officer        = Officer::create(['name' => 'EDGAR BARRENECHE','type' => 'Secretary']);

        $noteType       = NoteType::create(['name' => 'General']);
        $noteType       = NoteType::create(['name' => 'Benefits']);
        $noteType       = NoteType::create(['name' => 'Payments']);
        $noteType       = NoteType::create(['name' => 'Assessment']);

        $position       = Position::create(['name' => 'Battalion Chief.N.Fire']);
        $position       = Position::create(['name' => 'Company Fire Captain.N.Fire']);
        $position       = Position::create(['name' => 'Driver/Engineer.N.Fire']);
        $position       = Position::create(['name' => 'Fire Fighter.N.Fire']);
        $position       = Position::create(['name' => 'Fire Inspector I.N.Fire']);
        $position       = Position::create(['name' => 'Fire Inspector II.N.Fire']);
        $position       = Position::create(['name' => 'Fire Investigator.N.Fire']);
        $position       = Position::create(['name' => 'Fire Medic I.N.Fire']);
        $position       = Position::create(['name' => 'Fire Rescue Training Officer.N.Fire']);
        $position       = Position::create(['name' => 'Lead Fire Investigator.N.Fire']);
        $position       = Position::create(['name' => 'Lieutenant.N.Fire']);
        $position       = Position::create(['name' => 'Paramedic.N.Fire']);
        $position       = Position::create(['name' => 'Rescue Lieutenant.N.Fire']);
        $position       = Position::create(['name' => 'Senior Telecommunicator.N.Comm']);
        $position       = Position::create(['name' => 'Telecommunications Supervisor.N.Comm']);
        $position       = Position::create(['name' => 'Telecommunicator.N.Comm']);
        $position       = Position::create(['name' => 'Not Set']);

        $reason         = Reason::create(['name' => 'Employee Request']);
        $reason         = Reason::create(['name' => 'Open Enrollment']);
        $reason         = Reason::create(['name' => 'Divorce']);
        $reason         = Reason::create(['name' => 'Marriage']);
        $reason         = Reason::create(['name' => 'Child']);
        $reason         = Reason::create(['name' => 'Non-payment']);
        $reason         = Reason::create(['name' => 'Resignation/Termination']);
        $reason         = Reason::create(['name' => 'Other']);

        $insurranceCompany         = InsurranceCompany::create(['name' => 'Allstate']);
        $insurranceCompany         = InsurranceCompany::create(['name' => 'Associate Membership']);
        $insurranceCompany         = InsurranceCompany::create(['name' => 'COLONIAL']);
        $insurranceCompany         = InsurranceCompany::create(['name' => 'GE Product']);
        $insurranceCompany         = InsurranceCompany::create(['name' => 'GUARDIAN']);
        $insurranceCompany         = InsurranceCompany::create(['name' => 'ING']);
        $insurranceCompany         = InsurranceCompany::create(['name' => 'Knights Dues']);
        $insurranceCompany         = InsurranceCompany::create(['name' => 'PrePaid Legal']);
        $insurranceCompany         = InsurranceCompany::create(['name' => 'US Legal']);
        $insurranceCompany         = InsurranceCompany::create(['name' => 'TransAmerica']);
        $insurranceCompany         = InsurranceCompany::create(['name' => 'BackPay Deduction']);
        $insurranceCompany         = InsurranceCompany::create(['name' => 'Washington National']);

        $gender         = Gender::create(['name' => 'Male']);
        $gender         = Gender::create(['name' => 'Female']);

        $status         = Status::create(['name' => 'Active Assignment']);
        $status         = Status::create(['name' => 'Leave Medical-Pay']);
        $status         = Status::create(['name' => 'Leave Military-Pay']);
        $status         = Status::create(['name' => 'Leave of Absence-Workers Compensation']);
        $status         = Status::create(['name' => 'Leave Parental-Pay']);
        $status         = Status::create(['name' => 'Light Duty-Workers Compensation']);

        $title          = Title::create(['name' => 'MR']);
        $title          = Title::create(['name' => 'MS']);
        $title          = Title::create(['name' => 'MISS']);
        $title          = Title::create(['name' => 'MRS']);

        $certificate         = Certificate::create(['name' => 'Paramedic']);
        $certificate         = Certificate::create(['name' => 'EMT']);
        $certificate         = Certificate::create(['name' => 'Inspector']);
        $certificate         = Certificate::create(['name' => 'Fire Instructor']);

        $disability          = Disability::create(['name' => 'Well']);
        $disability          = Disability::create(['name' => 'Disability Long Term']);
        $disability          = Disability::create(['name' => 'Disability Short Term']);
        
        $sickPlans          = SickPlan::create(['name' => 'A','cost' => 0]);
        $sickPlans          = SickPlan::create(['name' => 'B','cost' => 0]);
        $sickPlans          = SickPlan::create(['name' => 'NE','cost' => 0]);
        $sickPlans          = SickPlan::create(['name' => 'C','cost' => 0]);

        $unionMembeshipStatus          = UnionMembershipStatus::create(['name' => 'Active']);
        $unionMembeshipStatus          = UnionMembershipStatus::create(['name' => 'Active - Retired']);
        $unionMembeshipStatus          = UnionMembershipStatus::create(['name' => 'Deceased']);
        $unionMembeshipStatus          = UnionMembershipStatus::create(['name' => 'Inactive - Retired']);
        $unionMembeshipStatus          = UnionMembershipStatus::create(['name' => 'Ineligible']);
        $unionMembeshipStatus          = UnionMembershipStatus::create(['name' => 'Ineligible - Active']);
        $unionMembeshipStatus          = UnionMembershipStatus::create(['name' => 'Non Union']);
        $unionMembeshipStatus          = UnionMembershipStatus::create(['name' => 'Resigned']);
        $unionMembeshipStatus          = UnionMembershipStatus::create(['name' => 'Suspended']);
        $unionMembeshipStatus          = UnionMembershipStatus::create(['name' => 'Terminated']);
        $unionMembeshipStatus          = UnionMembershipStatus::create(['name' => 'Reinstated']);
        $unionMembeshipStatus          = UnionMembershipStatus::create(['name' => 'Initiated']);
        $unionMembeshipStatus          = UnionMembershipStatus::create(['name' => 'Transferred In']);
        $unionMembeshipStatus          = UnionMembershipStatus::create(['name' => 'Transferred Out']);
        $unionMembeshipStatus          = UnionMembershipStatus::create(['name' => 'On Leave']);
        $unionMembeshipStatus          = UnionMembershipStatus::create(['name' => 'Off Leave']);
        $unionMembeshipStatus          = UnionMembershipStatus::create(['name' => 'Withdrawn']);
        $unionMembeshipStatus          = UnionMembershipStatus::create(['name' => 'Laid Off']);

        $station          = Station::create(['name' => 'Station 01']);
        $station          = Station::create(['name' => 'Station 02']);
        $station          = Station::create(['name' => 'Station 35']);
        $station          = Station::create(['name' => 'Dispatch (EDC)']);
        $station          = Station::create(['name' => 'HeadQuarters']);
        $station          = Station::create(['name' => 'Prevention']);
        $station          = Station::create(['name' => 'Training']);
        $station          = Station::create(['name' => 'Station 29']);
        $station          = Station::create(['name' => 'Station 11']);
        $station          = Station::create(['name' => 'Station 15']);

    }
}
