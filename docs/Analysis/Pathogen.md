The pathogen table states basic information about Pathogens. This is mainly their name, type of pathogen (DNA or RNA) and their acronym (that is used throughout the database).

## Relations
many-to-many relation to [Analysis_Test](Analysis_Test.md) via [PathTest_Link](PathTest_Link.md)
many-to-many relation to [Analysis_SubOrder](Analysis_SubOrder.md) via [Pathogens_to_Test](Pathogens_to_Test.md)
many-to-many relation to [Analysis_Sample](Analysis_Sample.md) via [Pathogens_Tested](Pathogens_Tested.md)
