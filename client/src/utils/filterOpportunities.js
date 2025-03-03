const filterOpportunities = ({
  selectedCity,
  searchKeyWord,
  selectedJobType,
  opportunitiesList,
  selectedSkills
}) => {
  // Search by keyword only
  if (
    !selectedCity.length &&
    !selectedJobType &&
    !selectedSkills.length &&
    searchKeyWord
  ) {
    return opportunitiesList.filter(opportunity => {
      return (
        (opportunity.description &&
          opportunity.description
            .toLowerCase()
            .includes(searchKeyWord.toLowerCase())) ||
        (opportunity.opportunity_title &&
          opportunity.opportunity_title
            .toLowerCase()
            .includes(searchKeyWord.toLowerCase()))
      );
    });
  }
  // Search by keyword and location
  if (
    selectedCity.length &&
    !selectedJobType &&
    !selectedSkills.length &&
    searchKeyWord
  ) {
    return opportunitiesList.filter(opportunity => {
      return (
        ((opportunity.description &&
          opportunity.description
            .toLowerCase()
            .includes(searchKeyWord.toLowerCase())) ||
          (opportunity.opportunity_title &&
            opportunity.opportunity_title
              .toLowerCase()
              .includes(searchKeyWord.toLowerCase()))) &&
        selectedCity.includes(opportunity.location)
      );
    });
  }
  // Search by keyword and skills
  if (
    !selectedCity.length &&
    !selectedJobType &&
    selectedSkills.length &&
    searchKeyWord
  ) {
    return opportunitiesList.filter(opportunity => {
      const filterSkills = selectedSkills.filter(skill => {
        return opportunity.skills.includes(skill);
      });
      const filteredDescription =
        opportunity.description &&
        opportunity.description
          .toLowerCase()
          .includes(searchKeyWord.toLowerCase());
      const filteredTitles =
        opportunity.opportunity_title &&
        opportunity.opportunity_title
          .toLowerCase()
          .includes(searchKeyWord.toLowerCase());

      return (
        (filteredDescription || filteredTitles) &&
        filterSkills &&
        filterSkills.length
      );
    });
  }
  // Search by keyword and Jobtype

  if (
    !selectedCity.length &&
    selectedJobType &&
    !selectedSkills.length &&
    searchKeyWord
  ) {
    return opportunitiesList.filter(opportunity => {
      const filteredDescription =
        opportunity.description &&
        opportunity.description
          .toLowerCase()
          .includes(searchKeyWord.toLowerCase());
      const filteredTitles =
        opportunity.opportunity_title &&
        opportunity.opportunity_title
          .toLowerCase()
          .includes(searchKeyWord.toLowerCase());

      return (
        (filteredDescription || filteredTitles) &&
        opportunity.type === selectedJobType
      );
    });
  }
  // Location
  if (
    selectedCity.length &&
    !selectedJobType &&
    !selectedSkills.length &&
    !searchKeyWord
  ) {
    return opportunitiesList.filter(opportunity => {
      const filteredCity = selectedCity.filter(city => {
        return opportunity.location.includes(city);
      });
      return filteredCity && filteredCity.length;
    });
  }
  // Search by Location and skills
  if (
    selectedCity.length &&
    !selectedJobType &&
    selectedSkills.length &&
    !searchKeyWord
  ) {
    return opportunitiesList.filter(opportunity => {
      const filterSkills = selectedSkills.filter(skill => {
        return opportunity.skills.includes(skill);
      });
      const filteredCity = selectedCity.filter(city => {
        return opportunity.location.includes(city);
      });
      return (
        filteredCity &&
        filteredCity.length &&
        filterSkills &&
        filterSkills.length
      );
    });
  }
  // Location and Job type
  if (
    selectedCity.length &&
    selectedJobType &&
    !selectedSkills.length &&
    !searchKeyWord
  ) {
    return opportunitiesList.filter(opportunity => {
      const filteredCity = selectedCity.filter(city => {
        return opportunity.location.includes(city);
      });
      return (
        filteredCity &&
        filteredCity.length &&
        opportunity.type === selectedJobType
      );
    });
  }
  // Search by skills
  if (
    !selectedCity.length &&
    !selectedJobType &&
    selectedSkills.length &&
    !searchKeyWord
  ) {
    return opportunitiesList.filter(opportunity => {
      const filterSkills = selectedSkills.filter(skill => {
        return opportunity.skills.includes(skill);
      });

      return filterSkills && filterSkills.length;
    });
  }
  // Search by skills and Job type
  if (
    !selectedCity.length &&
    selectedJobType &&
    selectedSkills.length &&
    !searchKeyWord
  ) {
    return opportunitiesList.filter(opportunity => {
      const filterSkills = selectedSkills.filter(skill => {
        return opportunity.skills.includes(skill);
      });

      return (
        filterSkills &&
        filterSkills.length &&
        opportunity.type === selectedJobType
      );
    });
  }
  // Search by job type
  if (
    !selectedCity.length &&
    selectedJobType &&
    !selectedSkills.length &&
    !searchKeyWord
  ) {
    return opportunitiesList.filter(
      opportunity => opportunity.type === selectedJobType
    );
  }
  // Search by keyword, location, skills, job type
  if (
    selectedCity.length &&
    selectedJobType &&
    selectedSkills.length &&
    searchKeyWord
  ) {
    return opportunitiesList.filter(opportunity => {
      const filterSkills = selectedSkills.filter(skill => {
        return opportunity.skills.includes(skill);
      });

      return (
        ((opportunity.description &&
          opportunity.description
            .toLowerCase()
            .includes(searchKeyWord.toLowerCase())) ||
          (opportunity.opportunity_title &&
            opportunity.opportunity_title
              .toLowerCase()
              .includes(searchKeyWord.toLowerCase()))) &&
        selectedCity.includes(opportunity.location) &&
        opportunity.type === selectedJobType &&
        filterSkills &&
        filterSkills.length
      );
    });
  }
  // Search by keyword , location ,skills
  if (
    selectedCity.length &&
    !selectedJobType &&
    selectedSkills.length &&
    searchKeyWord
  ) {
    return opportunitiesList.filter(opportunity => {
      const filterSkills = selectedSkills.filter(skill => {
        return opportunity.skills.includes(skill);
      });
      return (
        ((opportunity.description &&
          opportunity.description
            .toLowerCase()
            .includes(searchKeyWord.toLowerCase())) ||
          (opportunity.opportunity_title &&
            opportunity.opportunity_title
              .toLowerCase()
              .includes(searchKeyWord.toLowerCase()))) &&
        selectedCity.includes(opportunity.location) &&
        filterSkills &&
        filterSkills.length
      );
    });
  }
  // Search by keyword , location, job type
  if (
    selectedCity.length &&
    selectedJobType &&
    !selectedSkills.length &&
    searchKeyWord
  ) {
    return opportunitiesList.filter(opportunity => {
      return (
        ((opportunity.description &&
          opportunity.description
            .toLowerCase()
            .includes(searchKeyWord.toLowerCase())) ||
          (opportunity.opportunity_title &&
            opportunity.opportunity_title
              .toLowerCase()
              .includes(searchKeyWord.toLowerCase()))) &&
        selectedCity.includes(opportunity.location) &&
        opportunity.type === selectedJobType
      );
    });
  }
  // Search by keyword , skills, job type
  if (
    !selectedCity.length &&
    selectedJobType &&
    selectedSkills.length &&
    searchKeyWord
  ) {
    return opportunitiesList.filter(opportunity => {
      const filterSkills = selectedSkills.filter(skill => {
        return opportunity.skills.includes(skill);
      });
      const filteredDescription =
        opportunity.description &&
        opportunity.description
          .toLowerCase()
          .includes(searchKeyWord.toLowerCase());
      const filteredTitles =
        opportunity.opportunity_title &&
        opportunity.opportunity_title
          .toLowerCase()
          .includes(searchKeyWord.toLowerCase());

      return (
        (filteredDescription || filteredTitles) &&
        filterSkills &&
        filterSkills.length &&
        opportunity.type === selectedJobType
      );
    });
  }
  // Search by location , skills ,job type
  if (
    selectedCity.length &&
    selectedJobType &&
    selectedSkills.length &&
    !searchKeyWord
  ) {
    return opportunitiesList.filter(opportunity => {
      const filterSkills = selectedSkills.filter(skill => {
        return opportunity.skills.includes(skill);
      });
      const filteredCity = selectedCity.filter(city => {
        return opportunity.location.includes(city);
      });
      return (
        filteredCity &&
        filteredCity.length &&
        filterSkills &&
        filterSkills.length &&
        opportunity.type === selectedJobType
      );
    });
  }
  return opportunitiesList;
};
export default filterOpportunities;
