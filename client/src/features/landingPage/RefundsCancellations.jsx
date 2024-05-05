import styles from "../../constants/styles";

const RefundsCancellations = () => {
  return (
    <div class="container mx-auto py-8 text-left text-white">
      <div class="mx-auto max-w-xl">
        <h1 class="mb-4 text-3xl font-bold">Refund and Cancellation Policy</h1>

        <p class="mb-4 text-gray-300">
          At EasyCollect, we value transparency and aim to provide the best
          experience for our users. Please review our refund and cancellation
          policy below.
        </p>

        <h2 class="mb-2 text-2xl font-bold">Refund Policy</h2>

        <p class="mb-4 text-gray-300">
          Our refund policy is designed to ensure fairness and clarity for all
          users. Refunds may be processed under the following conditions:
        </p>

        <ul class="mb-4 list-inside list-disc text-gray-300">
          <li>
            The user requests a refund within 24 hours of making the payment.
          </li>

          <li>Technical errors resulting in duplicate payments.</li>
        </ul>

        <p class="mb-4 text-gray-300">
          Refunds will be processed within 7-10 working days from the date of
          approval. The refunded amount will be credited to the customer's bank
          account.
        </p>

        <h2 class="mb-2 text-2xl font-bold">Cancellation Policy</h2>

        <p class="mb-4 text-gray-300">
          Users may cancel their participation in an event or session under the
          following conditions:
        </p>

        <ul class="mb-4 list-inside list-disc text-gray-300">
          <li>
            Cancellation request should be made directly to the organizer and it
            solely depends on the organizer's discretion. EasyCollect does not
            mediates in the cancellation process.
          </li>
          <li>
            Cancellations made by the oranizer will be communicated to the users
            via email.
          </li>
          <li>
            Organizers reserve the right to cancel or reschedule events or
            sessions due to unforeseen circumstances, in which case participants
            will be notified accordingly.
          </li>
        </ul>

        <p class="mb-4 text-gray-300">
          We encourage users to review our refund and cancellation policies
          carefully. For any further inquiries or assistance, please contact our
          support team.
        </p>
      </div>
    </div>
  );
};

export default RefundsCancellations;
