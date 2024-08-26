<script setup lang="ts">
import { ref } from 'vue';
import axios from 'axios';
import PvButton from 'primevue/button';
import PvInputText from 'primevue/inputtext';
import PvDialog from 'primevue/dialog';

// Form data
const form = ref({
  applicant_name: '',
  applicant_email: '',
  applicant_mobile_phone_number: '',
  applicant_address: '',
  annual_income_before_tax: '',
  incoming_address: '',
  incoming_deposit: '',
  incoming_price: '',
  incoming_stamp_duty: '',
  loan_amount: '',
  loan_duration: '',
  monthly_expenses: '',
  outgoing_address: '',
  outgoing_mortgage: '',
  outgoing_valuation: '',
  savings_contribution: '',
});

// Modal visibility
const showModal = ref(false);

// Function to submit the application
const submitApplication = async () => {
  try {
    const response = await axios.post('http://localhost:7100/api/loan-application', form.value);
    alert(response.data.message); // Handle response from the backend
    showModal.value = false; // Close modal after submission
  } catch (error) {
    console.error(error);
    alert('Failed to submit the application.');
  }
};
</script>

<template>
  <div>
    <PvButton label="Submit Application" @click="showModal = true" />

    <PvDialog v-model:visible="showModal" modal header="Loan Application">
      <form @submit.prevent="submitApplication">
        <PvInputText v-model="form.applicant_name" placeholder="Applicant Name" required class="p-mb-3" />
        <PvInputText v-model="form.applicant_email" placeholder="Applicant Email" type="email" required class="p-mb-3" />
        <PvInputText v-model="form.applicant_mobile_phone_number" placeholder="Mobile Phone Number" type="tel" required class="p-mb-3" />
        <PvInputText v-model="form.applicant_address" placeholder="Applicant Address" required class="p-mb-3" />
        <PvInputText v-model="form.annual_income_before_tax" placeholder="Annual Income Before Tax" type="number" required class="p-mb-3" />
        <PvInputText v-model="form.incoming_address" placeholder="Incoming Address" required class="p-mb-3" />
        <PvInputText v-model="form.incoming_deposit" placeholder="Incoming Deposit" type="number" required class="p-mb-3" />
        <PvInputText v-model="form.incoming_price" placeholder="Incoming Price" type="number" required class="p-mb-3" />
        <PvInputText v-model="form.incoming_stamp_duty" placeholder="Incoming Stamp Duty" type="number" required class="p-mb-3" />
        <PvInputText v-model="form.loan_amount" placeholder="Loan Amount" type="number" required class="p-mb-3" />
        <PvInputText v-model="form.loan_duration" placeholder="Loan Duration (years)" type="number" required class="p-mb-3" />
        <PvInputText v-model="form.monthly_expenses" placeholder="Monthly Expenses" type="number" required class="p-mb-3" />
        <PvInputText v-model="form.outgoing_address" placeholder="Outgoing Address" required class="p-mb-3" />
        <PvInputText v-model="form.outgoing_mortgage" placeholder="Outgoing Mortgage" type="number" required class="p-mb-3" />
        <PvInputText v-model="form.outgoing_valuation" placeholder="Outgoing Valuation" type="number" required class="p-mb-3" />
        <PvInputText v-model="form.savings_contribution" placeholder="Savings Contribution" type="number" required class="p-mb-3" />

        <PvButton type="submit" label="Submit" class="p-mt-3" />
      </form>
    </PvDialog>
  </div>
</template>

<style scoped>
.pv-inputtext {
  width: 100%;
}
.p-mb-3 {
  margin-bottom: 1rem;
}
.p-mt-3 {
  margin-top: 1rem;
}
</style>
