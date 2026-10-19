export type Publication = {
  id: string;
  title: string;
  journal: string;
  url: string;
  badgeImage?: string;
  badgeLabel?: string;
  description: string;
  abstract: string;
  keywords: string[];
};

export const publications: Publication[] = [
  {
    id: 'pustaka-ai-federated-learning-heart-disease',
    title:
      'Experiment Tracking dan Model Registry pada Federated Learning untuk Klasifikasi Penyakit Jantung',
    journal: 'Pustaka AI',
    url: 'https://jurnal.pustakagalerimandiri.co.id/index.php/pustakaai/article/view/2511/1644',
    badgeImage: '/badges/sinta-4.png',
    badgeLabel: 'SINTA 4',
    description:
      'A study on experiment tracking and model registry for federated learning-based heart disease classification.',
    abstract:
      'Developing heart disease classification models requires diverse and representative multi-center clinical data. However, the processing and exchange of medical records are restricted by regulations such as GDPR, HIPAA, Law No. 27/2022 on Personal Data Protection, and Indonesian Health Ministry Regulation No. 24/2022 on Medical Records. These restrictions keep data in silos, making centralized training difficult. Federated Learning (FL) offers a solution by enabling collaborative training without transferring raw data to a server. Nevertheless, multi-client training introduces operational challenges: configurations, metrics, artifacts, client contributions, and model lineages are difficult to trace through logs alone. This research integrates Flower and MLflow to implement hierarchical experiment tracking and an automated model registry through MLflowStrategy, which extends Flower’s FedAvg with metric logging, best-model selection, and registration. Docker Compose orchestrates the FL server, two non-IID clients, and MLflow as isolated services on a Docker bridge network to simulate logical FL separation. The study uses Hungary and Switzerland as clients, with Cleveland for centralized evaluation over ten rounds. All 15 test steps passed black-box testing. The optimal configuration used the saga solver with max_iter set to 5, achieving 84% centralized accuracy in round six, with local accuracies of 81% for Hungary and 48% for Switzerland. These results confirm that the Flower-MLflow integration provides full experiment traceability and model versioning without altering Flower’s federated learning aggregation mechanisms.',
    keywords: ['Federated Learning', 'Experiment Tracking', 'Model Registry', 'Flower', 'MLflow'],
  },
];
