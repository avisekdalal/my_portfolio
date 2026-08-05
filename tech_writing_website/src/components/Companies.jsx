import styles from './Companies.module.css';

const companies = [
  { name: 'Cyient', logo: '/img/companies/cyient.svg' },
  { name: 'Infor', logo: '/img/companies/infor.svg' },
  { name: 'Broadcom', logo: '/img/companies/broadcom.svg' },
  { name: 'OpenText', logo: '/img/companies/opentext.svg' },
  { name: 'PMI Standards', logo: '/img/companies/pmi-standards.svg' },
  { name: 'Equitable', logo: '/img/companies/equitable.svg' },
];

export default function Companies() {
  return (
    <section
      id="companies"
      className={styles.section}
      aria-labelledby="companies-heading"
    >
      <div className="container">
        <h2 id="companies-heading" className={styles.title}>
          Companies I Worked For
        </h2>
        <ul className={styles.list}>
          {companies.map((company) => (
            <li key={company.name} className={styles.item}>
              <img
                src={company.logo}
                alt={company.name}
                className={styles.logo}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
